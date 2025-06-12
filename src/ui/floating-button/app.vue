<template>
  <div class="floating-button-container">
    <div 
      class="floating-button"
      @click="handleClick"
      :class="{ 'pulse': showPulse }"
    >
      <div class="button-background"></div>
      <div class="logo-container" v-html="vibrantLogoSvg"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// State for pulse animation
const showPulse = ref(false);

// Handle button click
const handleClick = () => {
  // Open the extension popup
  if (typeof chrome !== 'undefined' && chrome.action) {
    chrome.action.openPopup();
  } else {
    // Fallback for development/testing
    console.log('Floating button clicked - would open popup');
  }
};

// Add pulse animation periodically
onMounted(() => {
  // Pulse every 10 seconds to draw attention
  setInterval(() => {
    showPulse.value = true;
    setTimeout(() => {
      showPulse.value = false;
    }, 2000);
  }, 10000);
});

// Vibrant Wellness logo SVG based on Figma design
const vibrantLogoSvg = `<svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#004879"/>
      <stop offset="100%" stop-color="#8BBDC7"/>
    </linearGradient>
  </defs>
  <path d="M19 0L38 34H0L19 0Z" fill="url(#logoGradient)"/>
</svg>`;
</script>

<style scoped>
.floating-button-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10000;
  pointer-events: none;
}

.floating-button {
  position: relative;
  width: 58px;
  height: 58px;
  cursor: pointer;
  pointer-events: auto;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.floating-button:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.25);
}

.floating-button:active {
  transform: scale(0.95);
}

.button-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: conic-gradient(
    from 43deg at 50% 50%,
    rgb(223, 243, 247) 0deg,
    rgb(255, 250, 241) 180deg,
    rgb(223, 243, 247) 360deg
  );
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
}

.logo-container {
  position: absolute;
  top: 15px;
  left: 10px;
  width: 38.12px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Pulse animation */
.floating-button.pulse {
  animation: pulse 2s ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0px 4px 20px 0px rgba(0, 72, 121, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .floating-button-container {
    bottom: 15px;
    right: 15px;
  }
}

@media (max-width: 480px) {
  .floating-button-container {
    bottom: 10px;
    right: 10px;
  }
  
  .floating-button {
    width: 50px;
    height: 50px;
  }
  
  .button-background {
    width: 50px;
    height: 50px;
  }
  
  .logo-container {
    top: 13px;
    left: 8px;
    width: 34px;
    height: 30px;
  }
}
</style>
