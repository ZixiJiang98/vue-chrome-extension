<template>
  <button 
    type="button"
    class="flex justify-center items-center"
    :class="[
      type, 
      colorType, 
      fontWeight,
      { 'is-shadow': isShadow }, 
      { disabled },
      { 'disabled-fill': disabledFill },
      { 'disabled-stroke': disabledStroke },
      { loading },
      { 'large-font': largeFont }
    ]"
    :disabled="disabled"
    :style="styleText"
    @click="handleClick"
  >
    <div v-if="prefixUrl" class="prefix mr-2.5">
      <img :src="require(`@/assets/${prefixUrl}`)" :class="loading ? 'loading-icon' : ''" />
    </div>
    <slot></slot>
    <div v-if="suffixUrl" class="suffix ml-2.5">
      <img :src="require(`@/assets/${suffixUrl}`)" :class="loading ? 'loading-icon' : ''" />
    </div>
  </button>
</template>
  
<script>
export default {
  name: "NewLibraryButton",
  props: {
    type: {
      type: String,
      default: "normal" // normal, narrow, round
    },
    colorType: {
      type: String,
      default: "dark-blue" 
      // dark-blue, sky-blue, none-stroke, dark-blue-stroke, 
      // sky-blue-stroke, red-stroke, red
    },
    prefix: {
      type: String,
      default: "",
    },
    suffix: {
      type: String,
      default: null,
    }, 
    hasShadow: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    largeFont: { // only for text button (none-stroke)
      type: Boolean,
      default: false,
    },
    isBold: {
      type: Boolean,
      default: false,
    },
    styleText: {
      type: String,
      default: "" // hardcode style, not recommended
    },
  },
  data() {
    return {
    };
  },
  emits: ["click"],
  computed: {
    isShadow() {
      if (this.colorType === "none-stroke") {
        return false
      }
      return true;
    },
    fontWeight() {
      if (this.colorType.includes("stroke") && this.colorType !== "none-stroke") {
        return "light-weight";
      } 
      return "normal-weight";
    },
    disabledFill() {
      return this.disabled && ["dark-blue", "sky-blue","red"].includes(this.colorType);
    },
    disabledStroke() {
      return this.disabled && ["dark-blue-stroke", "sky-blue-stroke","red-stroke"].includes(this.colorType);
    },
    loadingUrl() {
      if (["dark-blue", "sky-blue","red"].includes(this.colorType)) {
        return "NewLibrary/loading_light.svg";
      } else if (this.colorType === "red-stroke") {
        return "NewLibrary/loading_red.svg";
      }
      return "NewLibrary/loading_dark.svg"
    },
    prefixUrl() {
      if (!this.loading) {
        return this.prefix;
      } else {
        if (!this.suffix) {
          return this.loadingUrl;
        } else {
          return ""
        }
      }
    },
    suffixUrl() {
      if (!this.loading) {
        return this.suffix;
      } else {
        if (this.suffix) {
          return this.loadingUrl;
        } else {
          return ""
        }
      }
    }
  },
  methods: {
    handleClick(e) {
      if (this.loading) {
        e.stopPropagation();
        return
      } else {
        this.$emit("click");
      }
    }
  },
};
</script>
  
<style scoped>
button {
  font-size: 14px;
  font-family: "IBM Plex Sans Hebrew";
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.normal {
  height: 40px;
  padding: 8px 32px;
  border-radius: 4px;
}

.narrow {
  height: 38px;
  padding: 8px 20px;
  border-radius: 4px;
}

.round {
  height: 32px;
  padding: 4px 32px;
  border-radius: 15px;
}

.heavy-weight {
  font-style: normal;
  font-weight: 600;
}

.normal-weight {
  font-style: normal;
  font-weight: 500;
}

.light-weight {
  font-style: normal;
  font-weight: 400;
}

.dark-blue {
  background: var(--VibrantDarkBlue, #004879);
  color: #FFF;
  border: none;
}

.sky-blue {
  background: var(--New_Button_SkyBlue, #81B0E1);
  color: #FFF;
}

.red {
  background: var(--ErrorRed, #D10000);
  color: #FFF;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.none-stroke {
  background: none;
  color: var(--color-Darkblue-000, #1E4670);
  /* none stroke has unique padding */
  padding: 4px 10px;  
  line-height: 14px;
  height: 26px;
  text-decoration-line: underline;
  border: none;
}

.dark-blue-stroke {
  border: 1px solid var(--TextButton_Blue, #1E4670);
  background: none;
  color: var(--color-Darkblue-000, #1E4670);
}

.sky-blue-stroke {
  border: 1px solid var(--New_Button_SkyBlue, #81B0E1);
  background: none;
  color: var(--New_Library_PressBlue, #5587BC);
}

.red-stroke {
  border: 1px solid var(--ErrorRed, #D10000);
  background: none;
  color: var(--ErrorRed, #D10000);
}

.dark-blue:hover, .sky-blue:hover {
  background: #20A7C1;
}

.dark-blue:active, .sky-blue:active {
  background: #5587BC;
}

.red:hover, .red-stroke:hover {
  background: var(--ErrorRed_Hover, #F63B3B);
  color: #FFF;
}

.red:active, .red-stroke:active{
  background: #A60B0B;
  color: #FFF;
}

.dark-blue-stroke:hover {
  background: rgba(30, 70, 112, 0.08);
}

.dark-blue-stroke:active {
  background: rgba(30, 70, 112, 0.12);
}

.sky-blue-stroke:hover {
  background: #FDF9F6;
}

.sky-blue-stroke:active {
  background: #EDF1F4;
}

.none-stroke:hover {
  background: rgba(30, 70, 112, 0.08);
}

.none-stroke:active {
  background: rgba(30, 70, 112, 0.12);
}

.none-stroke:disabled, .disabled.none-stroke:hover, .disabled.none-stroke:active {
  color: var(--DividerGray, #C4C4C4);
  background: none;
}

.disabled {
  cursor: not-allowed;
}

.disabled-fill, .disabled-fill:hover, .disabled:active {
  background: var(--DividerGray, #C4C4C4);
  color: #FFF;
}

.disabled-stroke, .disabled-stroke:hover, .disabled-stroke:active {
  border: 1px solid var(--ContentMediumGrey, #999);
  background: #FFF;
  color: var(--ContentMediumGrey, #999);
}

.loading-icon {
  animation: spin 2s linear infinite;
}

.large-font {
  font-size: 18px;
}
</style>
