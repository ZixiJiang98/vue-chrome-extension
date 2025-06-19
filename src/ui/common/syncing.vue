<template>
  <div class="syncing-overlay">
    <div class="syncing-card">
      <!-- Decorative gradient blobs -->
      <svg class="blob blob-1" viewBox="0 0 150 150" fill="none">
        <defs>
          <linearGradient id="blob-grad" x1="75" y1="0" x2="75" y2="150" gradientUnits="userSpaceOnUse">
            <stop stop-color="#004879" />
            <stop offset="1" stop-color="#8BBDC7" />
          </linearGradient>
        </defs>
        <circle cx="75" cy="75" r="75" fill="url(#blob-grad)" />
      </svg>
      <svg class="blob blob-2" viewBox="0 0 110 110" fill="none">
        <circle cx="55" cy="55" r="55" fill="url(#blob-grad)" />
      </svg>

      <!-- Animated central spinner -->
      <div class="spinner-wrapper">
        <svg class="spinner" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" stroke="#E6E6E6" stroke-width="8" />
          <path d="M60 32A28 28 0 1 1 32 4" stroke="url(#blob-grad)" stroke-width="8" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 32 32" to="360 32 32" dur="1.2s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <!-- Text -->
      <div class="syncing-texts">
        <div class="syncing-title">Synchronizing</div>
        <div class="syncing-desc">patient profile ...</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No logic required for static design
</script>

<style scoped>
.syncing-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.syncing-card {
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;
  background-image: conic-gradient(from 90deg, rgba(223,243,247,1) 0deg, rgba(255,250,241,1) 180deg, rgba(223,243,247,1) 360deg);
  border-radius: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* hide overflowing blobs */
  padding: 24px;
}
.blob {
  position: absolute;
  opacity: 0.25;
}
.blob-1 {
  width: 260px;
  height: 260px;
  left: -60px;
  top: -70px;
}
.blob-2 {
  width: 200px;
  height: 200px;
  right: -50px;
  bottom: -60px;
}
.spinner-wrapper {
  width: 106px;
  height: 106px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  position: relative;
  z-index: 1; /* above blobs */
}
.spinner {
  width: 106px;
  height: 106px;
}
.syncing-texts {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.syncing-title {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #374957;
}
.syncing-desc {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #374957;
  margin-top: 2px;
}
</style> 