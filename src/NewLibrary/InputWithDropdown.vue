<template>
  <div class="flex justify-start new-libary-search-container">
    <div
      :class="dropdownWidth ? dropdownWidth : 'w-1/4'"
      :style="dropdownStyle ? dropdownStyle : ''"
    >
      <el-select
        v-model="selectedSearchOption"
        @change="changeSearchOption"
        :placeholder="dropdownPlaceholder"
        class="new-libary-search-dropdown flex items-center justify-start"
        :class="!prefix ? 'new-libary-search-dropdown-no-prefix' : ''"
        popper-class="new-library-popper new-library-search-popper"
      >
        <template v-if="prefix" #prefix>
          <img :src="require(`@/assets/${prefix}`)" />
        </template>
        <el-option
          :label="option.label"
          :value="option.value"
          v-for="option in options"
          :key="option.value"
        >
          <template #default>
            <div class="flex items-center gap-2">
              <img v-if="option.prefix" :src="require(`@/assets/${option.prefix}`)" />
              <span :class="!option.prefix ? 'pl-2' : ''">{{ option.label }}</span>
            </div>
          </template>
        </el-option>
      </el-select>
    </div>
    <div class="search-input-container">
      <el-input
        class="new-library-input new-library-input-basic new-libary-search-input"
        v-model="inputValue"
        :placeholder="inputPlaceholder"
      >
        <template #suffix>
          <Button
            v-if="clearable"
            color-type="none-stroke"
            class="justify-self-start clear-btn"
            @click="handleClearBtn"
          >
            Clear
          </Button>
          <div v-else-if="suffix">
            <img :src="require(`@/assets/${suffix}`)" />
          </div>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import _ from "lodash";
export default {
  components: {
    Button,
  },
  props: {
    dropdownWidth: {
      type: String,
      default: null
    },
    dropdownStyle: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    defaultOption: {
      type: String,
      default: null
    },
    dropdownPlaceholder: { 
      type: String,
      default: null
    },
    inputPlaceholder: {
      type: String,
      default: null
    },
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedSearchOption: "",
      inputValue: "",
    }
  },
  emits: ["search"],
  computed: {
    formattedInputValue() {
      return this.inputValue.trim();
    },
    searchParams() {
      return {
        option: this.selectedSearchOption,
        input: this.formattedInputValue
      };
    }
  },
  watch: {
    selectedSearchOption(newVal) {
      // when change option and input is not empty
      if (newVal && this.formattedInputValue) {
        this.search();
      }
    },
    formattedInputValue() {
      this.debounceSearch();
    }
  },
  created() {
    this.debounceSearch = _.debounce(this.search, 1200);
  },
  mounted() {
    this.selectedSearchOption = this.defaultOption;
  },
  methods: {
    changeSearchOption(val) {
      this.selectedSearchOption = val;
      if (this.formattedInputValue) {
        this.search();
      }
    },
    search() {
      this.$emit("search", this.searchParams);
    },
    handleClearBtn() {
      this.inputValue = "";
    }
  }
}
</script>

<style scoped>
.search-input-container {
  flex: 1 1 auto;
  width: auto;
}

.new-libary-search-dropdown {
  box-sizing: border-box;
  height: 40px;
  border: 1px solid #B5B5B5;
  border-radius: 4px 0px 0px 4px;
}
</style>
