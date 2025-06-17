<template>
  <div class="relative">
  <InputLabel 
    :inactive="inactive"
    :prefix="prefix"
    :isRequiredText="isRequiredText"
    :InputTitle="InputTitle"
  />
  <div 
    class="textarea-wrapper" 
    :class="[{ 'inactive': inactive }, { 'draggable': draggable } ]"
  >
    <textarea 
      class="textarea"
      :class="{ 'inactive': inactive }"
      :rows="rows" 
      v-model="dynamicInputValue"
      :maxlength="maxlength"
      :placeholder="placeholder"
      ></textarea>
      <div 
      class="limit-section-wrapper"
      :class="{ 'limit-section-inactive': inactive }"
    >
      <p 
        class="limit-section ml-3"
        :class="{ 'inactive': inactive }"
        >
        {{this.input.length}}/{{maxlength}} characters
      </p>
      <Button
        v-if="!inactive&&clearable"
        color-type="none-stroke"
        class="justify-self-start clear-btn mr-5"
        @click="handleClearBtn"
      >
        Clear
      </Button>
    </div>
  </div>
  </div>
</template>
<script>
import Button from './Button.vue'
import InputLabel from './InputLabel.vue'
export default {
  components: {
    Button,
    InputLabel
  },
  props: {
    clearable: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: "Example Placeholder"
    },
    maxlength: {
      type: Number,
      default: 10
    },
    rows: {
      type: Number,
      default: 2
    },
    inactive: {
      type: Boolean,
      default: false
    },
    inactiveText: {
      type: String,
      default: ""
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
    draggable: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      input: ""
    }
  },
  methods: {
    handleClearBtn() {
      this.input = ""
    }
  },
  computed: {
    dynamicInputValue: {
      set(value) {
        if(!this.inactive) {
          this.input = value
        }
      },
      get() {
        return this.inactive ? this.inactiveText : this.input
      }
    }
  }
}
</script>
<style scoped>
.textarea {
  font-family: "IBM Plex Sans Hebrew";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  padding-left: 12px;
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  height: 100%;
  transition: background 0.5s ease-in-out; 
}

.textarea:hover {
  border-radius: var(--radius, 4px);
  background: rgba(30, 70, 112, 0.08); 
  transition: all 0.5s ease;
}

.textarea:active {
  background:rgba(30, 70, 112, 0.12);
  transition: none;
}

.textarea:focus {
  background: var(--color-White-000, #FFF);
  transition: background 0.8s ease-in-out; 
}

.textarea-wrapper {
  padding:  8px 12px 38px 12px;
  border-radius: var(--radius, 4px);
  border: 1px solid var(--DividerGray, #C4C4C4);
  background: var(--color-White-000, #FFF);
}

.textarea-wrapper.draggable {
  overflow: scroll;
  resize: both;
  position: relative;
}

.textarea.inactive {
  background-color: var(--DisabledGrey_20, #E0E0E0);
  pointer-events: none;
  color: var(--NotifyGrey_97, #979797);
}

.textarea-wrapper.inactive {
  border-color: var(--DisabledGrey_20, #E0E0E0);
  background-color: var(--DisabledGrey_20, #E0E0E0);
  cursor: not-allowed;
}

.limit-section {
  height: 24px;
  margin-top: 4px;
  color: var(--ContentMediumGrey, #999);
  font-family: "IBM Plex Sans Hebrew";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
}

.limit-section-wrapper {
  position: absolute;
  bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.limit-section.inactive {
  color: var(--NotifyGrey_97, #979797);
}

.limit-section-inactive {
  justify-content: flex-end;
  right: 20px;
}

.textarea::placeholder {
  font-family: "IBM Plex Sans Hebrew";
  color: var(--ContentMediumGrey, #999);
}
</style>