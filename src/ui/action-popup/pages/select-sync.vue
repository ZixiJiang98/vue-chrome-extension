<template>
  <div class="container">
    <div class="content">
      <div class="title">Great Job!</div>
      <div class="subtitle">Select a way to synchronize data between EHR and Vibrant. You can switch the method in settings later.</div>
      <div class="button-group">
        <button class="primary-btn" @click="handleSyncWebsite">
          <span class="icon">
            <!-- Figma SVG icon, white fill -->
            <svg viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-svg">
              <path d="M8 3V0L4 4L8 8V5C11.31 5 14 7.69 14 11C14 12.01 13.75 12.97 13.3 13.8L14.76 15.26C15.54 14.03 16 12.57 16 11C16 6.58 12.42 3 8 3ZM8 17C4.69 17 2 14.31 2 11C2 9.99 2.25 9.03 2.7 8.2L1.24 6.74C0.46 7.97 0 9.43 0 11C0 15.42 3.58 19 8 19V22L12 18L8 14V17Z" fill="white"/>
            </svg>
          </span>
          <span class="btn-text">Sync via Website</span>
        </button>
        <button class="secondary-btn" @click="goToEnterCredential">
          <span class="icon">
            <!-- Figma SVG icon for API, #374957 fill -->
            <svg viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-svg">
              <path d="M1 10H21V12H1V10ZM2.15 5.95L3 4.47L3.85 5.95L5.15 5.2L4.3 3.72H6V2.22H4.3L5.15 0.75L3.85 0L3 1.47L2.15 0L0.85 0.75L1.7 2.22H0V3.72H1.7L0.85 5.2L2.15 5.95ZM8.85 5.2L10.15 5.95L11 4.47L11.85 5.95L13.15 5.2L12.3 3.72H14V2.22H12.3L13.15 0.75L11.85 0L11 1.47L10.15 0L8.85 0.75L9.7 2.22H8V3.72H9.7L8.85 5.2ZM22 2.22H20.3L21.15 0.75L19.85 0L19 1.47L18.15 0L16.85 0.75L17.7 2.22H16V3.72H17.7L16.85 5.2L18.15 5.95L19 4.47L19.85 5.95L21.15 5.2L20.3 3.72H22V2.22Z" fill="#374957"/>
            </svg>
          </span>
          <span class="btn-secondary-text">Sync via API</span>
        </button>
      </div>
      <div class="skip-wrapper">
        <router-link to="/action-popup/skip-page" class="skip-link">Skip for now</router-link>
      </div>
    </div>
    <Syncing v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Syncing from '../../common/syncing.vue'

const isLoading = ref(false)
const router = useRouter()

const goToEnterCredential = () => {
  router.push('/connect-ehr')
}

function handleSyncWebsite() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    router.push('/action-popup/sync-finish')
  }, 1000)
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.title {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 44px;
  color: #333333;
  text-align: center;
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

.button-group {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.primary-btn {
  padding: 4px 19px;
  width: 100%;
  background: #004879;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgba(74, 74, 74, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
}

.btn-text {
  color: #ffffff;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}

.secondary-btn {
  padding: 4px 38px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #1e4670;
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgba(74, 74, 74, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
}

.btn-secondary-text {
  color: #1e4670;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-size: 14px;
  line-height: 24px;
}

.icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-svg {
  width: 100%;
  height: 100%;
}

.skip-wrapper {
  margin-top: 8px;
}

.skip-link {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-decoration: underline;
  color: #999999;
}
</style>