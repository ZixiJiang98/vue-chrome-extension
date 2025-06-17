<template>
  <div class="relative">
    <div class="new-library-combo-box flex justify-start relative" ref="comboBox">
      <div 
        class="combo-box-container flex-grow flex items-center gap-x-2 gap-y-3 flex-grow min-w-0"
        :class="wrapChips ? 'flex-wrap' : 'flex-nowrap overflow-hidden justify-end'"
        ref="comboBoxContainer"
      >
        <component
          :is="chipsComponent"
          v-for="(item, index) in formattedSelectedList"
          :is-rectangle="isRectangle"
          :key="index"
          :name="item[labelFieldName]"
          :quantity="item.quantity"
          :quantity-editable="item.quantityEditable === false ? false : true"
          :prefix="chipsPrefix"
          :clearable="chipsClearable"
          :colorType="chipsColorType"
          @clear="clear(index)"
          @changeQuantity="(value) => changeQuantity({ delta: value, index })"
        />
        <component
          :is="chipsComponent"
          v-if="!wrapChips && selectedList.length > 1"
          :name="'+' + String(selectedList.length - 1)"
          :clearable="false"
          :colorType="chipsColorType"
        />
        <el-input
          class="combo-box-input"
          :class="!wrapChips ? 'hide-left' : ''"
          v-model="inputValue"
          :style="`min-width: ${inputMinWidth};`"
          :placeholder="placeholder"
          @input="debounceInput"
          @focus="inputFocus"
          @blur="inputBlur"
        >
        </el-input>
      </div>
      <div v-if="$slots.suffix" class="combo-box-suffix ml-2">
        <slot name="suffix"></slot>
      </div>
    </div>
    <div v-if="isShowDropdown" ref="dropdownContainer" class="w-full" :class="isFloating ? 'absolute z-50' : ''">
      <Dropdown 
        :is-show-dropdown="isShowDropdown"
        :is-collapse="isDropdownCollapse"
        :combo-list="displayedComboList"
        :number-of-collapse="numberOfCollapse"
        :max-height-of-dropDown="maxHeightOfDropDown"
        :label-field-name="labelFieldName"
        :checkbox-color-type="checkboxColorType"
        :is-single="isSingle"
        :has-action="hasAction"
        :action-field-name="actionFieldName"
        :has-limit="hasLimit"
        :reach-limit="selectedList.length === limit"
        :clearable="chipsClearable"
        :message="messageForDropDown"
        @changeStatus="changeStatus"
        @toggleIsCollapse="isDropdownCollapse = !isDropdownCollapse"
      />
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import Dropdown from "./Dropdown.vue";
import Chips from "./Chips.vue";
import ChipsQuantity from "./ChipsQuantity.vue";

export default {
  components: {
    Dropdown,
    Chips,
    ChipsQuantity,
  },
  props: {
    placeholder: {
      type: String,
      default: null
    },
    inputMinWidth: {
      type: String,
      default: "25%"
    },
    comboList: {
      type: Array,
      default: () => [],
    },
    numberOfCollapse: { 
      type: Number,
      default: 6,
    },
    wrapChips: {
      type: Boolean,
      default: true,
    },
    isSingle: {
      type: Boolean,
      default: false,
    },
    hasLimit: {
      type: Boolean,
      default: false,
    },
    limit: {
      type: Number,
      default: 10,
    },
    maxHeightOfDropDown: { 
      type: Number,
      default: 376, 
      // the max height of result list container in dropdown. If -1, no max height
    },
    showListWhenEmptyInput: { 
      type: Boolean,
      default: true,
    },
    useLocalList: { 
      type: Boolean, 
      default: false 
    },
    updateFunc: {
      type: Function,
      default: null, 
      // required when useLocalList is true
      // should preserve the input list instead of
      // returning new list to keep the check box status
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
    isFloating: {
      type: Boolean, 
      default: true, 
    },
    checkboxColorType: {
      type: String,
      default: "dark-blue"
    },
    chipsClearable: {
      type: Boolean, 
      default: true, 
    },
    chipsPrefix: {
      type: String,
      default: ""
    },
    chipsColorType: {
      type: String,
      default: "dark-blue"
    },
    needsMessage: {
      type: Boolean, 
      default: false, 
    },
    message: {
      type: String,
      default: ""
    },
    haveQuantity: {
      type: Boolean,
      default: false,
    },
    isRectangle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mouseX: 0,
      mouseY: 0,

      inputValue: "",
      oldInput: "",
      isFocus: false,
      selectedList: [],
      isShowDropdown: false,
      isDropdownCollapse: true,
      localComboList: [],
    }
  },
  emits: ["updateInput", "changeStatus"],
  computed: {
    updatedLocalObject() {
      if (!this.updateFunc) {
        return {}
      }
      let input = this.inputValue.trim() 
        ? this.inputValue.trim() 
        : this.oldInput 
          ? this.oldInput 
          : "";
      return this.updateFunc(input, this.localComboList, this.needsMessage);
    },
    sortedlocalComboList() {
      return this.updatedLocalObject.list;
    },
    localMessage() {
      return this.updatedLocalObject.message;
    },
    messageForDropDown() {
      return this.message ? this.message : this.localMessage;
    },
    displayedComboList() {
      return this.useLocalList ? this.sortedlocalComboList : this.comboList;
    },
    formattedSelectedList() {
      if (!this.wrapChips) {
        return this.selectedList.slice(-1);
      }
      return this.selectedList;
    },
    chipsComponent() {
      return this.haveQuantity ? 'ChipsQuantity' : 'Chips';
    },

  },
  watch: {
    inputValue(newVal) {
      if (newVal.trim() && !this.isShowDropdown) {
        this.isShowDropdown = true;
      }
    },
    // updatedLocalObject(newVal) {
    // }
  },
  created() {
    this.debounceInput = _.debounce(this.handleInput, 1200);
  },
  mounted() {
    document.addEventListener("mousedown", this.handleClickOutside);
    if (this.useLocalList) {
      this.localComboList = this.processComboList(this.comboList);
    }
  },
  beforeUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  },
  methods: {
    handleClickOutside(event) {
      // Check if click is inside the input or dropdown
      if (
        this.$refs.comboBox?.contains(event.target) || 
        this.$refs.dropdownContainer?.contains(event.target)
      ) {
        return;
      }
      this.isShowDropdown = false;
      this.clearStorage();
    },
    processComboList(comboList) {
      return comboList.map((item, index) => ({
        ...item,
        disabledFunc: item.disabledFunc ? item.disabledFunc : () => { return false },
        checkboxStatus: item.checkboxStatus || "uncheck",
        index: index
      }));
    },
    inputFocus() {
      this.isFocus = true; 
      if (this.showListWhenEmptyInput || this.inputValue.trim()) {
        this.isShowDropdown = true;
      }
    },
    inputBlur(event) {
      this.isFocus = false; 
    },
    handleInput() {
      if (this.inputValue.trim() && this.inputValue.trim() != this.oldInput) {
        this.oldInput = this.inputValue.trim();
        if (!this.useLocalList) {
          this.$emit("updateInput", this.inputValue.trim());
        }
      }
    },
    changeStatus(params) {
      if (!this.useLocalList) { 
        this.$emit('changeStatus', params);
      } else {
        if (this.isSingle && this.selectedList.length > 0) {
          const prevIndex = this.selectedList[0].index;
          // Uncheck the previously selected item in localComboList
          this.localComboList[prevIndex].checkboxStatus = "uncheck";
          // Reset selectedList
          this.selectedList.pop();
        }
        this.localComboList[params.index].checkboxStatus = params.status;
      }
      if (params.status === "checked") {
        this.selectedList.push(params.item);
      } else {
        this.selectedList = this.selectedList.filter(item => item.index !== params.index);
      }
      this.inputValue = "";
    },
    changeQuantity(params) {
      const { index, delta } = params;
      const item = this.selectedList[index];
      const quantity = item.quantity + delta;
      if (quantity <= 0) {
        this.clear(index);
        return;
      }
      item.quantity = item.quantity + delta;
    },
    clear(index) {
      const item = this.selectedList[index];
      if (!this.useLocalList) { 
        this.$emit('changeStatus', {
          item,
          index: item.index,
          status: "uncheck",
        });
      } else {
        this.localComboList[item.index].checkboxStatus = "uncheck";
      }
      this.selectedList.splice(index, 1);
    },
    submitSelectedList() {
      return this.selectedList;
    },
    clearStorage() {
      this.inputValue = "";
      this.oldInput = "";
      // this.selectedList = [];
    }
  }
}
</script>

<style scoped>
.new-library-combo-box {
  padding: 8px 16px 8px 16px;
  border-radius: var(--radius, 4px);
  border: 1px solid var(--color-Grey-Grey-C9, #C9CACD);
  background: var(--color-White-000, #FFF);
}
.combo-box-container {
max-width: 100%;
}

.combo-box-container {
  border-radius: var(--radius, 4px);
}

/* .combo-box-container.focus-style {
  background: var(--color-White-000, #FFF);
  transition: background 0.8s ease-in-out; 
} */

.combo-box-suffix {
  min-width: 24px;
  max-height: 24px
}

.hide-left {
  flex-shrink: 0;
  min-width: 100px; /* Ensures input doesn't shrink too much */
  margin-left: auto; /* Pushes chips to the left, hiding overflowed ones */  
}
</style>
