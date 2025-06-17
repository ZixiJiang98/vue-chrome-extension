<template>
  <div class="vibrant-logo-container">
    <div class="logo-wrapper">
      <img 
        src="../../assets/vibrant-wellness-logo.png" 
        alt="Vibrant Wellness Logo" 
        class="logo-image"
      />
      <img
        src="../../assets/vibrantText.png"
        alt="Vibrant Text"
      />
    </div>
    
    <div class="copilot-text-wrapper">
      <div class="vibrant-wellness-text"></div>
      <span class="copilot-text">Copilot</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props needed for this component
</script>

<script lang="ts">
export default {
  name: 'VibrantLogo'
}
</script>

<style scoped>
.vibrant-logo-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 5.96px;
  width: 100%;
  height: auto;
}

.logo-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  gap: 13.4px;
  height: 100%;
}

.logo-image {
  width: 22.5px;
  height: auto;
  object-fit: contain;
}

img[src*="vibrantText.png"] {
  width: 32.247px;
  height: 7.445px;
  object-fit: fill;
  filter: brightness(0) saturate(100%) invert(20%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
  fill: var(--TrueBlack, #333);
}

.copilot-text-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
}

.vibrant-wellness-text {
  width: 32.25px;
  height: 7.45px;
  /* This would be the "VibrantWellness" text as an SVG, but since we're using the logo image, we'll hide this */
  display: none;
}

.copilot-text {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 10.42px;
  line-height: 1.43em;
  letter-spacing: 0.71%;
  text-align: center;
  background: linear-gradient(180deg, #004879 0%, #8BBDC7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

/* Fallback for browsers that don't support background-clip */
@supports not (-webkit-background-clip: text) {
  .copilot-text {
    color: #004879;
  }
}
</style>
