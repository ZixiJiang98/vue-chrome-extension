<template>
  <div class="syncing-overlay">
    <div class="syncing-card">
      <div class="syncing-spinner-container">
        <div class="syncing-spinner-bg">
          <!-- Animated SVG Spinner -->
          <svg class="syncing-spinner" fill="none" viewBox="0 0 106 88" width="106" height="88">
            <defs>
              <linearGradient id="syncing-gradient" x1="53" x2="53" y1="0" y2="87.9269" gradientUnits="userSpaceOnUse">
                <stop stop-color="#004879" />
                <stop offset="1" stop-color="#8BBDC7" />
              </linearGradient>
            </defs>
            <g>
              <path d="M80.3765 38.8675L87.6641 46.1551C88.6778 47.1688 89.8833 48.0181 91.3079 48.2647C93.5956 48.662 95.7873 48.0044 97.4449 46.3743C98.6914 45.1277 99.9517 43.8675 101.198 42.6209L104.952 38.8675C106.294 37.5251 106.404 35.0593 104.952 33.7169C103.5 32.3744 101.253 32.2648 99.801 33.7169L92.7189 40.799C92.5682 40.9497 92.4175 41.1004 92.2668 41.2511C92.2394 41.2785 92.212 41.3059 92.1846 41.3333C91.7737 41.7716 92.2531 41.1278 92.4586 41.1415C92.3353 41.21 92.212 41.2785 92.0887 41.347C92.6367 41.1278 92.7326 41.0867 92.349 41.1963C92.8285 41.1004 93.0476 41.1552 92.6367 41.1552C92.2257 41.1552 92.4312 41.1141 92.9244 41.1963C92.1983 41.0456 93.623 41.6483 92.9929 41.2648C92.3627 40.8812 93.623 41.8949 93.075 41.347C92.9929 41.2648 92.9107 41.1826 92.8148 41.0867L85.4724 33.7443C84.1299 32.4018 81.6642 32.2922 80.3217 33.7443C78.9793 35.1963 78.8697 37.4429 80.3217 38.8949L80.3765 38.8675Z" fill="url(#syncing-gradient)">
                <animateTransform attributeName="transform" type="rotate" from="0 53 44" to="360 53 44" dur="1s" repeatCount="indefinite" />
              </path>
            </g>
          </svg>
        </div>
      </div>
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.syncing-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0,0,0,0.25);
  min-width: 320px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 40px 28px 40px;
  position: relative;
}
.syncing-spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}
.syncing-spinner-bg {
  width: 106px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.syncing-spinner {
  width: 106px;
  height: 88px;
  display: block;
}
.syncing-texts {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.syncing-title {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #374957;
  text-align: center;
  margin-bottom: 0px;
}
.syncing-desc {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #374957;
  text-align: center;
  white-space: pre-wrap;
}
</style> 