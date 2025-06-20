<template>
  <div 
    class="chips flex justify-between gap-2"
    :class="[colorType, { 'disabled': disabled, 'is-rectangle': isRectangle }]"
    :style="`max-width: ${chipsMaxWidth}px;`"
  >
    <div class="flex justify-start items-center gap-2 flex-grow min-w-0">
      <div v-if="prefix" class="prefix">
        <img :src="prefixSrc" class="img-fixed" />
      </div>
      <div 
        class="name truncate cursor-default flex-grow min-w-0"
      >
        {{ name }}
      </div>
    </div>
    <div
      v-if="clearable" 
      class="flex items-center cursor-pointer pl-0.5"
      :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
      @mouseenter="isClearHover = true" 
      @mouseleave="isClearHover = false; isClearActive = false"
      @mousedown="isClearActive = true"
      @mouseup="isClearActive = false"
      @click="clear"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect :class="colorType1" width="20" height="20" rx="2" />
        <path :class="colorType2" d="M18 3.61143L16.3886 2L10 8.38857L3.61143 2L2 3.61143L8.38857 10L2 16.3886L3.61143 18L10 11.6114L16.3886 18L18 16.3886L11.6114 10L18 3.61143Z" />
        <path :class="colorType2" d="M18 3.61143L16.3886 2L10 8.38857L3.61143 2L2 3.61143L8.38857 10L2 16.3886L3.61143 18L10 11.6114L16.3886 18L18 16.3886L11.6114 10L18 3.61143Z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean, 
      default: true, 
    },
    prefix: {
      type: String,
      default: ""
    },
    colorType: {
      type: String,
      default: "dark-blue"
    },
    disabled: {
      type: Boolean, 
      default: false, 
    },
    isRectangle: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      shouldTruncate: false,
      isClearHover: false,
      isClearActive: false,
      chipsMaxWidth: 999,
    }
  },
  emits: ["clear"],
  computed: {
    prefixSrc() {
      if (!this.prefix) {
        return ""
      }
      return require(`@/assets/${this.prefix}`)
    },
    colorType1() {
      if (this.disabled) {
        return "disabled-clear-1"
      }
      return this.colorType + '-clear-1' + (
        this.isClearActive 
          ? '-active'
          : this.isClearHover 
            ? '-hover'
            : ''
      );
    },
    colorType2() {
      if (this.disabled) {
        return "disabled-clear-2"
      }
      return this.colorType + '-clear-2' + (
        this.isClearActive 
          ? '-active'
          : this.isClearHover 
            ? '-hover'
            : ''
      );
    }
  },
  mounted() {
    this.updateMaxWidth();
    window.addEventListener("resize", this.updateMaxWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateMaxWidth);
  },
  methods: {
    updateMaxWidth() {
      this.chipsMaxWidth = this.$parent.$refs.comboBoxContainer.offsetWidth;
    },
    clear() {
      if (!this.disabled) {
        this.$emit('clear');
      }
    }
  }
}
</script>

<style scoped>
.chips {
  height: 32px;
  padding: 4px 16px;
  border-radius: 20px;
}

.name {
  color: var(--TrueBlack, #333);
  font-family: "IBM Plex Sans Hebrew";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px; 
}

.img-fixed {
  height: auto;
  max-width: none;
  flex-shrink: 0;
}

.dark-blue {
  background: #E6EDF2;
}
.dark-blue:hover {
  background: #DAE5EE;
  transition: background 0.5s ease;
}
.dark-blue:active {
  background: #CCDAE4;
  color: var(--SecondaryBlack, #666);
}

.cyan {
  background: #D3F1F3;
}
.cyan:hover {
  background: #C5E5E7;
  transition: background 0.5s ease;
}
.cyan:active {
  background: #A9D7DA;
  color: var(--SecondaryBlack, #666);
}

.red {
  background: #F6CCCC;
}
.red:hover {
  background: #F4E3E3;
  color: var(--ErrorRed_Hover, #F63B3B);
  transition: background 0.5s ease;
}
.red:active {
  background: #D9C8C8;
  color: var(--ErrorRed_Pressed, #A60B0B);
}

.disabled {
  background: var(--DisabledGrey_20, #E0E0E0);
  color: var(--ContentMediumGrey, #999);
  cursor: not-allowed;
  transition: background 0.5s ease;
}

.disabled:hover {
  background: var(--DisabledGrey_20, #E0E0E0);
}

.disabled:active {
  background: var(--NotifyGrey_97, #979797);
  color: var(--TrueBlack, #333);
}

.dark-blue-clear-1 {
  fill: #99B6C9;
}

.dark-blue-clear-1-hover {
  fill: #51C6CE;
  transition: all 0.5s ease;
}

.dark-blue-clear-1-active {
  fill: #4CAEB5;
}

.dark-blue-clear-2, .dark-blue-clear-2-hover, .dark-blue-clear-2-active {
  fill: white;
}

.cyan-clear-1 {
  fill: #7CD4DA;
}

.cyan-clear-1-hover {
  fill: #6691AF;
  transition: all 0.5s ease;
}

.cyan-clear-1-active {
  fill: #4CAEB5;
}

.cyan-clear-2, .cyan-clear-2-hover, .cyan-clear-2-active {
  fill: white;
}

.red-clear-1 {
  fill: rgba(209, 0, 0, 0.20);
}

.red-clear-1-hover {
  fill: rgba(209, 0, 0, 0.35);;
}

.red-clear-1-active {
  fill: rgba(209, 0, 0, 0.35);
  transition: all 0.5s ease;
}

.red-clear-2 {
  fill: #D10000;
}

.red-clear-2-hover {
  fill: #F73B3B;
}

.red-clear-2-active {
  fill: #A60B0B;
}

.disabled-clear-1 {
  background: var(--DisabledGrey_20, #E0E0E0);
}

/* .disabled-clear-1-hover {
  fill: #6691AF;
  transition: background 0.5 ease;
}

.disabled-clear-1-active {
  fill: var(--SecondaryBlack, #666);
} */

.disabled-clear-2 {
  fill: #999999;
}

/* .disabled-clear-2-hover {
  fill: white;
  transition: background 0.5s ease;
}

.disabled-clear-2-active {
  fill: white;
} */

.is-rectangle {
  border-radius: 4px;
}
</style>
