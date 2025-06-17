<template>
  <div class="w-full flex flex-col relative">
    <div class="info-container" :class="{ 'error-container': isError }">
      <slot></slot>
    </div>
    <div v-if="isError" class="absolute mt-2 w-full top-full">
      <Alert type="error">
        <span class="flex items-center">
          {{  alertText }}
        </span>
      </Alert>
    </div>
  </div>
</template>

<script>
import Alert from './Alert.vue'

export default {
  components: {
    Alert,
  },
  props: {
    isError: {
      type: Boolean,
      default: false,
    },
    alertText: {
      type: String,
      default: 'Required fields cannot be empty.',
    },
  },
}
</script>


<style scoped>
.info-container {
  padding: 8px 4px;
}

.error-container {
  border-radius: 5px;
  border: 1px solid var(--ErrorRed, #D10000);
}
</style>