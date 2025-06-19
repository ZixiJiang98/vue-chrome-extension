<template>
  <div>
    <InputLabel 
      v-if="hasLabel"
      :prefix="labelPrefix"
      :isRequiredText="isRequiredText"
      :InputTitle="InputTitle"
    />
    <el-select
      v-model="selectedOption"
      value-key="id"
      :placeholder="placeholder"
      :disabled="inactive"
      class="new-libary-single-selector"
      popperClass="new-library-popper single-selector-popper"
      @change="change"
    >
      <template v-if="prefix" #prefix>
        <img :src="prefix" width="22" />
      </template>  
      <el-option
        v-for="(item, idx) in options"
        class="new-libary-single-selector-dropdown"
        :key="idx"
        :label="item.label ? item.label : item[valueField]"
        :value="item.label"
      >
        <template #default>
          <slot name="option-left" :item="item">
            <span style="float: left">{{ item.countryName || item.label }}</span>
          </slot>
          <slot name="option-right" :item="item">
            <span style="float: right">{{ (item.areaCode || '') }}</span>
          </slot>
        </template>
      </el-option>
    </el-select>
  </div>
</template>
<script>
import InputLabel from './InputLabel.vue'
export default {
  emits: ["change", "update:modelValue"],
  props: {
    hasLabel: {
      type: Boolean,
      default: false
    },
    valueField: {
      type: String,
      default: "value",
    },
    labelPrefix: {
      type: String,
      default: null,
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
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: "Default Option"
    },
    modelValue: {
      type: String,
      default: ""
    },
    inactive: {
      type: Boolean,
      default: false
    }
  },
  components: {
    InputLabel
  },
  computed: {
    selectedOption: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      }
    }
  },
  methods: {
    change(val) {
      this.$emit("change", val);
    }
  }
}
</script>
<style scoped>
/* 只在键盘操作时显示 focus outline，鼠标点击时不显示蓝色边框 */
.new-libary-single-selector:focus:not(:focus-visible),
.new-libary-single-selector .el-input__inner:focus:not(:focus-visible) {
  outline: none !important;
  box-shadow: none !important;
}

/* 去除 el-select 被点击时的蓝色边框 */
.new-libary-single-selector:focus,
.new-libary-single-selector .el-input__inner:focus {
  outline: none !important;
  box-shadow: none !important;
}
</style>