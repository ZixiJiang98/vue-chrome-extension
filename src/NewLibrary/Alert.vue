<template>
  <div 
    class="alert-container flex justify-start items-center gap-2.5"
    :class="type"
  >
    <img :src="imgMap[type]" alt="">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      default: "warning",
    }
  },
  computed: {
    imgMap() {
      return {
        warning: require('@/assets/NewLibrary/message/warning.svg'),
        error: require('@/assets/NewLibrary/message//error.svg'),
        info: require('@/assets/NewLibrary/message//info.svg'),
      };
    }
  }
}
</script>

<style scoped>
.alert-container {
  width: 100%;
  padding: 10px 16px 10px 16px;
  border-radius: 8px;

  font-family: "IBM Plex Sans Hebrew";
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  word-break: break-word;
}

.warning {
  background: #FEF9E9;
  color: #333;
}

.error {
  background: var(--color-Functional-Red-alert-bg, #FAEAEA);
  color: #D10000;
}

.info {
  background: #E8F4FD;
  color: #000;
}
</style>