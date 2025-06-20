<template>
  <div 
    class="w-full h-full"
    :class="loading ? 'relative' : ''"
  >
    <slot></slot>
    <div 
      v-if="loading" 
      class="absolute inset-0 flex flex-col justify-center items-center w-full z-50 new-library-loading-container"
      :class="background"
    >
      <div v-if="!isBig" >
        <component :is="asyncComponent" />
        <ArrowSmall />
      </div>
      <div v-else>
        <component :is="asyncComponent" />
        <ArrowBig />
      </div>
      <p v-if="loading && loadingText" class="absolute loading-text" :style="{ transform: `translateY(${isBig ? 108 : 60}px)` }">
        {{ loadingText }}
      </p>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import ArrowSmall from './ArrowSmall.vue' ;
import ArrowBig from './ArrowBig.vue' 
export default {
  components: {
    ArrowSmall,
    ArrowBig,
  },

  props: {
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: "none-background"
    },
    isBig: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
    };
  },
  computed: {
    asyncComponent() {
      return defineAsyncComponent(() => 
        import(`./LoadingIcons/${this.icon}.vue`)
      );
    }
  }

};

</script>

<style scoped>
.new-library-loading-container .rotating-circle {
  transform-origin: center;
  animation: rotate 1.6s linear infinite;
}
/* Rotating animation */
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.gradient-background {
  background: var(--Peaceful-Liner-_-0, linear-gradient(90deg, var(--color-background-Green-BG, #DAE9EC) 0%, #D3E8FF 100%));  
}

.none-background {
  background: rgba(255, 255, 255, 0.85);
}

.loading-text {
  font-size: 14px;
  font-family: "IBM Plex Sans Hebrew";
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
  color: var(--color-Darkblue-000, #1E4670);
}
</style>
