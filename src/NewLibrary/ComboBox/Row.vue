<template>
  <div class="row-container flex justify-between items-center w-full gap-1 px-2 py-0.5">
    <Checkbox 
      :disabled="unclickable || (item.checkboxStatus === 'checked' && !clearable)"
      :color-type="checkboxColorType"
      :status="item.checkboxStatus"
      @changeStatus="changeStatus"
    />
    <div 
      class="name flex-grow truncate" 
      :class="unclickable ? 'cursor-not-allowed' : 'cursor-pointer'" 
      @click="changeStatusParent"
    >
      {{ item[labelFieldName] }}
    </div>
    <div 
      v-if="hasAction" 
      class="action cursor-pointer" 
      :class="unclickable ? 'cursor-not-allowed' : 'cursor-pointer'" 
      @click="changeStatusParent"
    >
      {{
        actionFieldName && item[actionFieldName] && item[actionFieldName].length >= 2
        ? 
        (
          item.checkboxStatus === "checked"  
          ? item[actionFieldName][1]
          : item[actionFieldName][0]
        ) 
        : (
          item.checkboxStatus === "checked" 
          ? "Deselect"
          : "Select"
        )
      }}
    </div>
  </div>
</template>

<script>
import Checkbox from "../Checkbox.vue";
export default {
  components: {
    Checkbox,
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    isSingle: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean, 
      default: true, 
    },
    hasLimit: {
      type: Boolean,
      default: false,
    },
    reachLimit: {
      type: Boolean,
      default: false,
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
    }
  },
  data() {
    return {
      inputValue: "",
    }
  },
  emits: ["changeStatus"],
  computed: {
    disabled() {
      return this.item.disabledFunc();
    },
    unclickable() {
      return this.disabled 
        || (this.hasLimit && this.reachLimit && this.item.checkboxStatus === 'uncheck');
    },
  },
  methods: {
    changeStatus(status) {
      if (this.unclickable) {
        return;
      }
      if (status === "uncheck" && !this.clearable) {
        return;
      }
      this.$emit("changeStatus", { status, index: this.item.index, item: this.item });
    },
    changeStatusParent() {
      const status = this.item.checkboxStatus === "checked" ? "uncheck" : "checked";
      this.changeStatus(status);
    },
    // handleClick() {
    //   this.$emit("action", { index: this.item.index, item: this.item });
    // }
  }
}
</script>

<style scoped>
.row-container {
  height: 28px;
  color: var(--ContentMediumGrey, #999);
  border-radius: 4px;

  font-family: "IBM Plex Sans Hebrew";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.15px;
}

.action {
  color: var(--color-Darkblue-000, #1E4670);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
}

/* .name {
  padding-left: 12px;
} */

.row-container:hover {
  background: rgba(30, 70, 112, 0.08); 
  transition: all 0.5s ease;
}

.row-container:active {
  background:rgba(30, 70, 112, 0.12);
  transition: none;
}

.disabled {
  cursor: not-allowed !important;
}
</style>
