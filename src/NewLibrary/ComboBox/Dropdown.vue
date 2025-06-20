<template>
  <div class="w-full combo-dropdown-container">
    <div
      class="flex flex-col gap-2 items-center"
      :class="!isCollapse && maxHeightOfDropDown != -1 ? 'overflow-scroll' : ''"
      :style="!isCollapse && maxHeightOfDropDown > 0 ? `max-height: ${maxHeightOfDropDown}px;` : ''"    
    >
      <span class="flex message pl-3">{{ message }}</span>
      <Row 
        v-for="
          (item, index) in 
          isCollapse
            ? comboList.slice(0, numberOfCollapse)
            : comboList
        "
        :key="index"
        :item="item"
        :label-field-name="labelFieldName"
        :checkbox-color-type="checkboxColorType"
        :is-single="isSingle"
        :has-action="hasAction"
        :action-field-name="actionFieldName"
        :has-limit="hasLimit"
        :reach-limit="reachLimit"
        :clearable="clearable"
        @changeStatus="(params) => $emit('changeStatus', params)"
      />
    </div>
    <div 
      v-if="comboList.length > numberOfCollapse"
      class="flex justify-center items-center mt-2"
    >
      <span class="collapse-text" @click="$emit('toggleIsCollapse')">
        {{ isCollapse ? `Show all ${comboList.length} results` : 'Collapse' }}
      </span>
    </div>
  </div>
</template>

<script>
import Row from "./Row.vue";
export default {
  components: {
    Row
  },
  props: {
    isShowDropdown: {
      type: Boolean,
      default: false,
    },
    isCollapse: {
      type: Boolean,
      default: true,
    },
    comboList: {
      type: Array,
      default: () => [],
    },
    isSingle: {
      type: Boolean,
      default: false,
    },
    hasLimit: {
      type: Boolean,
      default: false,
    },
    reachLimit: {
      type: Boolean,
      default: false,
    },
    numberOfCollapse: { 
      type: Number,
      default: 6,
    },
    maxHeightOfDropDown: { 
      type: Number,
      default: 376, 
      // the max height of result list container in dropdown. If -1, no max height
    },
    labelFieldName: {
      type: String,
      default: "label"
    },
    hasAction: {
      type: Boolean,
      default: false,
    },
    actionFieldName: {
      type: String,
      default: ""
    },
    checkboxColorType: {
      type: String,
      default: "dark-blue"
    },
    clearable: {
      type: Boolean, 
      default: true, 
    },
    message: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
    }
  },
  emits: ["changeStatus", "toggleIsCollapse"],
  computed: {
  },
  watch: {
    // isShowDropdown(newVal, oldVal) {
    //   if (!newVal && oldVal) {
    //     this.clearStorage();
    //   }
    // },
    // isCollapse(newVal) {
    //   console.log(newVal)
    // }
  },
  methods: {
  }
}
</script>

<style scoped>
.combo-dropdown-container {
  padding: 8px 16px;

  border-radius: 0px 0px var(--radius, 4px) var(--radius, 4px);
  border: 1px solid var(--color-Grey-Grey-C9, #C9CACD);
  border-top: none;
  background: var(--color-White-000, #FFF);
}

.message {
  color: var(--ContentMediumGrey, #999);
  font-family: "IBM Plex Sans Hebrew";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
}

.collapse-text {
  cursor: pointer;
  color: var(--color-Darkblue-000, #1E4670);
  text-align: center;
  font-family: "IBM Plex Sans Hebrew";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
}
</style>
