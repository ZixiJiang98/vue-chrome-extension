<template>
  <div class="container">
    <div class="content">
      <div class="description-section">
        <div class="title">Connection provides a better experience.</div>
        <div class="subtitle">Select a way to synchronize data between EHR and Vibrant. You can switch the method in settings later.</div>
      </div>
      <div class="button-wrap">
        <div class="button-group">
          <button class="primary-btn" @click="goToSelectSync">Connect</button>
          <button class="secondary-btn" @click="closePopup">Continue Skip</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goToSelectSync = () => {
  router.push('/action-popup/select-sync')
}
const closePopup = () => {
  window.close()
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  box-sizing: border-box;
}

.content {
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.description-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.title {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  color: #333333;
  text-align: center;
  width: 244px;
}

.subtitle {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: #333333;
  text-align: center;
}

.button-wrap {
  width: 100%;
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

.button-group {
  width: 140px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.primary-btn {
  width: 100%;
  padding: 4px 0;
  background: #004879;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgba(74, 74, 74, 0.25);
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;
  cursor: pointer;
}

.secondary-btn {
  width: 100%;
  padding: 4px 0;
  background: #ffffff;
  color: #1e4670;
  border: 1px solid #1e4670;
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgba(74, 74, 74, 0.25);
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.25px;
  cursor: pointer;
  position: relative;
}
</style> 