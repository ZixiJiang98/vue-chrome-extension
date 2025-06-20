<template>
  <el-dialog
    append-to-body
    v-model="baseDialogIsVisible"
    class="new-library-dialog new-library-base-dialog"
    :class="{ 'with-prefix': withPrefix }"
    :title="title"
    @close="$emit('close')"
  >
    <img
      v-if="withPrefix"
      class="dialog-prefix"
      src="@/assets/NewLibrary/example_dark.svg"
    />
    <slot />
  </el-dialog>
  <!-- 
  <el-dialog
    append-to-body
    v-model="warningDialogIsVisible"
    class="new-library-dialog new-library-warning-dialog"
    :class="{ 'with-prefix': withPrefix }"
    title="Warning/ Error Text"
    @close="close"
  >
    <img v-if="withPrefix" class="dialog-prefix" src="@/assets/NewLibrary/example_dark.svg"/>
  </el-dialog>
  <el-dialog
    append-to-body
    v-model="infoDialogIsVisible"
    class="new-library-dialog new-library-info-dialog"
    :class="{ 'with-prefix': withPrefix }"
    title="Form Step Number/ Name/ Purpose"
    @close="close"
  >
    <img v-if="withPrefix" class="dialog-prefix" src="@/assets/NewLibrary/example_light.svg"/>
  </el-dialog>
  -->
</template>
<script>
export default {
  emits: ["close", "update:modelValue"],
  props: {
    withPrefix: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Modal Name/ Purpose/ Statement'
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    baseDialogIsVisible: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  }
};
</script>