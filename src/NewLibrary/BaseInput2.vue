<template>
  <div>
    <InputLabel 
      :inactive="inactive"
      :prefix="prefix"
      :isRequiredText="isRequiredText"
      :InputTitle="InputTitle"
    />
    <el-input
      class="new-library-input new-library-input-basic"
      :class="[
        { 'new-library-input-with-clear-btn': clearable },
        { 'inactive': inactive },
      ]"
      v-model="dynamicInputValue"
      :placeholder="placeholder"
      @input="checkInput"
    >
      <template #suffix>
        <img 
          v-if="searchable" 
          src="@/assets/NewLibrary/input/search.svg" 
          class="input-suffix-icon" 
        />
        <Button
          v-if="clearable"
          color-type="none-stroke"
          class="justify-self-start clear-btn"
          @click="handleClearBtn"
        >
          Clear
        </Button>
      </template>
    </el-input>
  </div>
</template>

<script>
import InputLabel from './InputLabel.vue'
import Button from './Button.vue'

export default {
  components: {
    InputLabel,
    Button
  },
  props: {
    validateFunc: {
      type: Function,
      default: null,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    inactive: {
      type: Boolean,
      default: false,
    },
    inactiveText: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Example Placeholder",
    },
    prefix: {
      type: String,
      default: null,
    },
    isRequiredText: {
      type: String,
      default: null,
    },
    InputTitle: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      inputValue: "",
    }
  },
  computed: {
    dynamicInputValue: {
      get() {
        return this.inactive ? this.inactiveText : this.inputValue
      },
      set(value) {
        if (!this.inactive) {
          this.inputValue = value;
        }
      }
    }
  },
  watch: {
  },
  methods: {
    checkInput(value) {
      console.log(value)
      if (this.validateFunc) {
        const valid = this.validateFunc(value);
        if (!valid) {
          console.log("error")
        }
      }
    },
    handleClearBtn() {
      this.inputValue = ""
    }

  }
}
</script>

<style scoped>
.clear-btn {
  position: absolute;
  top: 8px;
  right: 12px;
  height: 24px;
}
</style>
