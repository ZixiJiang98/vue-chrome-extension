<template>
  <div 
    class="flex items-center cursor-pointer" 
    :class="disabled ? 'cursor-not-allowed' : ''"
    @mouseenter="isHover = true" 
    @mouseleave="isHover = false"
  >
    <div 
      class="flex items-center" 
      @click="changeStatus(localStatus === 'checked' ? 'uncheck' : 'checked')"
    >
      <div 
        class="flex justify-center items-center" 
        :style="styleText"
      >
        <div v-if="localStatus === 'uncheck'">
          <svg :width="wrapWidth" :height="wrapWidth" :viewBox="viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect v-if="isHover && !disabled" class="svg-transition hover-animation" x="2" y="2" :width="width" :height="width" rx="4" :fill="hoverColor2" fill-opacity="0.12"/>
            <rect 
              class="svg-transition"
              x="4.5" 
              y="4.5" 
              :width="width - 5" 
              :height="width - 5" 
              rx="3.5" 
              :stroke="
                disabled ? disableColor
                :isHover ? hoverColor1 : color1" 
              :stroke-width="isHover && !disabled ? '2' : '1'"
            />
          </svg>
        </div>
        <div v-else-if="localStatus === 'checked'">
          <svg :width="wrapWidth" :height="wrapWidth" :viewBox="viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect 
              class="svg-transition" 
              x="4.5" 
              y="4.5" 
              :width="width - 5" 
              :height="width - 5" 
              rx="2.5" 
              :stroke="
                disabled ? disableColor
                : isHover ? hoverColor1 : checkColor1" 
              :stroke-opacity="isHover && !disabled ? '0.5' : '1'" 
              :stroke-width="isHover && !disabled ? '4' : '3'"
            />
            <rect 
              class="svg-transition" 
              x="4.5" 
              y="4.5" 
              :width="width - 5" 
              :height="width - 5" 
              rx="2.5" 
              :fill="
                disabled ? disableColor
                : isHover ? hoverColor1 : checkColor1" 
            />
            <path :transform="transform" d="M9.818 16.8018L5.45437 12.4381L6.98164 10.9109L9.818 13.7472L17.018 6.54723L18.5453 8.0745L9.818 16.8018Z" fill="white"/>
            <rect v-if="isHover && !disabled" class="svg-transition hover-animation" :width="wrapWidth" :height="wrapWidth" rx="4" :fill="hoverColor2" fill-opacity="0.12"/>
          </svg>
        </div>
        <div v-else-if="localStatus === 'partial' && isAll">
          <svg :width="wrapWidth" :height="wrapWidth" :viewBox="viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect class="svg-transition" x="4.5" y="4.5" :width="width - 5" :height="width - 5" rx="2.5" :stroke="disabled ? disableColor : checkColor1" stroke-width="3"/>
            <rect class="svg-transition" x="3.5" y="3.5" :width="width - 3" :height="width - 3" rx="2.5" :stroke="disabled ? disableColor : checkColor1" stroke-width="3"/>
            <rect class="svg-transition" x="4.5" y="4.5" :width="width - 5" :height="width - 5" rx="2.5" :fill="disabled ? disableColor : checkColor1" />
            <path :transform="transform" d="M6.54528 13.0927V10.9109H17.4544V13.0927H6.54528Z" fill="white"/>
          </svg>
        </div>
      </div>
      <span v-if="text" class="ml-2 text-sm checkbox-label">{{ text }}</span>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "NewLibraryCheckBox",
  props: {
    status: {
      type: String,
      default: "unceck" // uncheck, checked, partial
    },
    disabled: { 
      type: Boolean,
      default: false,
    },
    colorType: {
      type: String,
      default: "dark-blue" 
    },
    hoverColorType: {
      type: String,
      default: "" 
    },
    checkColorType: {
      type: String,
      default: "" 
    },
    isAll: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 24
    },
    text: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      colorMap: {
        "dark-blue": "#004879",
        "sky-blue": "#81B0E1",
        "cyan": "#50C5CE",
        "red": "#D10000",
      },
      color2Map: {
        "dark-blue": "#1E4670",
        "sky-blue": "#1E4670",
        "cyan": "#25B8C2",
        "red": "#F73B3B"
      },
      disableColor: "#E0E0E0",
      localStatus: this.status,
      isHover: false,
    };
  },
  emits: ["changeStatus"],
  computed: {
    localHoverColorType() {
      if (!this.hoverColorType) {
        return this.colorType;
      }
      return this.hoverColorType;
    },
    localCheckColorType() {
      if (!this.checkColorType) {
        if (this.localHoverColorType) {
          return this.localHoverColorType;
        } else {
          return this.colorType;
        }
      }
      return this.checkColorType;
    },
    wrapWidth() {
      return this.width + 4;
    },
    styleText() {
      return `height:${this.wrapWidth}px; width:${this.wrapWidth}px;`
    },
    color1() {
      return this.colorMap[this.colorType] || this.colorMap["dark-blue"];
    },
    color2() {
      return this.color2Map[this.colorType] || this.color2Map["dark-blue"];
    },
    hoverColor1() {
      return this.colorMap[this.localHoverColorType] || this.colorMap["dark-blue"];
    },
    hoverColor2() {
      return this.color2Map[this.localHoverColorType] || this.color2Map["dark-blue"];
    },
    checkColor1() {
      return this.colorMap[this.localCheckColorType] || this.colorMap["dark-blue"];
    },
    checkColor2() {
      return this.color2Map[this.localCheckColorType] || this.color2Map["dark-blue"];
    },
    viewBox() {
      return `0 0 ${this.wrapWidth} ${this.wrapWidth}`
    },
    transform() {
      const scale = this.width / 24; 
      const translateX = 2 * scale; 
      const translateY = 2 * scale;
      return `translate(${translateX}, ${translateY}) scale(${scale})`;
    }
  },
  watch: {
    status(newVal) {
      this.localStatus = newVal;
    }
  },
  methods: {
    changeStatus(status) {
      if (this.disabled) {
        return;
      }
      this.$emit("changeStatus", status);
    }
  },
};
</script>
  
<style scoped>
.svg-transition {
  transition: all 1s ease; 
}

.hover-animation {
  animation: fadeIn 0.5s ease forwards;  
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.checkbox-label {
  color: #333;
  font-family: 'IBM Plex Sans Hebrew', 'IBM Plex Sans', Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-align: center;
}
</style>
