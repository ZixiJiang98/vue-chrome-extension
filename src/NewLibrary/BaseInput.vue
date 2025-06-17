<template>
  <div>
    <el-input
      class="new-library-input new-library-input-basic"
      :class="[
        { 'new-library-input-with-clear-btn': clearable },
        { 'inactive': inactive },
      ]"
      v-model="internalValue"
      :placeholder="placeholder"
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
import Button from './Button.vue'

export default {
  components: {
    Button
  },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
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
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Example Placeholder',
    },
  },
  computed: {
    internalValue: {
      get() {
        return this.inactive ? this.inactiveText : this.modelValue;
      },
      set(value) {
        if (this.inactive) return;

        if (this.validateFunc) {
          const isValid = this.validateFunc(value);
          if (!isValid) {
            // Invalid: do nothing, ignore the input
            return;
          }
        }
        this.$emit('update:modelValue', value);
      },
    },
  },
  methods: {
    handleClearBtn() {
      if (this.inactive) return;
      this.$emit('update:modelValue', '');
    },
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
