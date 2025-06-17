<template>
  <div class="flex flex-row mb-1" :class="{ 'justify-end': isVertical }">
    <div class="flex">
      <img 
        v-if="prefix" 
        :class="{ 'mr-1': prefix }"
        :src="require(`@/assets/${prefix}`)" 
        alt="Prefix Icon" 
      />
      <div 
        class="label-text" 
        :class="{ 
          'diable-label-text': inactive, 
          'flex flex-col items-end': isVertical }"
        >
        {{ InputTitle }} 
        <span v-if="isRequiredText" class="required-text">
          ({{ isRequiredText }})
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    inactive: {
      type: Boolean,
      default: false
    },
    isRequiredText:  {
      type: String,
      default: null
    },
    InputTitle: {
      type: String,
      default: ""
    },
    prefix: {
      type: String,
      default: null
    },
    isVertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  computed: {
  }
}
</script>
<style>
.label-text {
  color: var(--color-Grey-Grey-4A, #4A4A4A);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.required-text {
  color: var(--ErrorRed, #D10000);
  font-weight: 700;
}

.diable-label-text {
  color: var(--ContentMediumGrey, #999);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>

