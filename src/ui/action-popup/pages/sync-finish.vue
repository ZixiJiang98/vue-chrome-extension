<template>
  <div class="welcome-login-container">
    <!-- Welcome and Login Section -->
    <div class="welcome-login-section">
      <!-- Welcome Text -->
      <div class="welcome-text">
        <h1 class="welcome-title">You Are All Set!</h1>
        <p class="welcome-subtitle">Enjoy our new features.</p>
      </div>
    </div>
    <div class="sync-finish-container">
      <img
        src="@/assets/congrat.gif"
        alt="congratulation"
        class="sync-finish-video"
        style="width: 114px; height: auto; border-radius: 12px; background: transparent; box-shadow: none;"
    />
    <!-- 你可以在这里放其他提示内容或按钮 -->
  </div>
    <Button
      type="round"
      color-type="dark-blue"
      @click="closePopup"
    >
      Ok.
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from '../../../NewLibrary/Button.vue'

function closePopup() {
  window.close()
}
</script> 
<style scoped>
.welcome-login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}

/* Welcome and Login Section */
.welcome-login-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 16px;
  width: 100%;
}

.welcome-text {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  width: 100%;
}

.welcome-title {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.57em;
  text-align: center;
  color: #333333;
  margin: 0;
}

.welcome-subtitle {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  letter-spacing: 3.125%;
  text-align: center;
  color: #333333;
  margin: 0;
}
</style>
