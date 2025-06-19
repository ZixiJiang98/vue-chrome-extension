<template>
  <div class="container">
    <div class="content">
      <!-- Credential Key Input -->
      <div class="credential-section">
        <div class="credential-label">
          <span class="icon">
            <img src="@/assets/password.png" alt="API Icon" class="icon-img" />
          </span>
          <span class="label-text">Enter Credential Key</span>
        </div>
        <div class="input-wrapper">
          <input
            class="text-input"
            placeholder="ANALQ-12DM-HPLKQ-098-"
            type="text"
          />
        </div>
      </div>
      <!-- Connect Button -->
      <button class="primary-btn" @click="handleConnect">Connect</button>
      <!-- Help Section -->
      <div class="help-section">
        <div class="help-text">Have problem connecting?</div>
        <button class="secondary-btn">
          <span class="icon">
            <!-- Play icon -->
            <svg viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-svg" width="24" height="24" style="width:100%;height:100%;">
              <path d="M8 4V12L15 8L8 4ZM20 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H7V18H15V16H20C21.1 16 22 15.1 22 14V2C22 0.9 21.1 0 20 0ZM20 14H2V2H20V14Z" fill="#374957"/>
            </svg>
          </span>
          <span class="tutorial-text">Watch Tutorial</span>
        </button>
        <div class="skip-wrapper">
          <router-link to="/action-popup/skip-page" class="skip-link">Skip for now</router-link>
        </div>
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

function handleConnect() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    router.push('/action-popup/sync-finish')
  }, 1000)
}
</script>

<style scoped>
/* Container */
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px; /* px-4 */
  box-sizing: border-box;
}

.content {
  width: 100%;
  max-width: 320px; /* max-w-xs */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 32px; /* gap-8 */
}

/* Credential Section */
.credential-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px; /* gap-5 */
  align-items: center;
  justify-content: center;
}

.credential-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  height: 24px; /* h-6 */
}

.icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.label-text {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4a4a4a;
}

/* Input */
.input-wrapper {
  position: relative;
  width: 100%;
}

.text-input {
  width: 100%;
  height: 40px; /* h-10 */
  padding: 8px 12px; /* px-3 py-2 */
  border: 1px solid #c9c9c9;
  border-radius: 4px;
  background: #ffffff;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-size: 16px;
  line-height: 1.5em;
  color: #333333;
  letter-spacing: 0.15px;
  box-sizing: border-box;
}

.text-input::placeholder {
  color: #999999;
}

.text-input:focus {
  outline: none;
  border-color: #004879;
}

/* Buttons */
.primary-btn {
  width: 100%;
  padding: 4px 38px;
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

.primary-btn:hover {
  opacity: 0.9;
}

.help-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 8px;
  box-sizing: border-box;
}

.help-text {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #333333;
  text-align: center;
}

.secondary-btn {
  width: 100%;
  padding: 4px 0; /* py-1 */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px; /* gap-3 */
  background: #ffffff;
  border: 1px solid #1e4670;
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgba(74, 74, 74, 0.25);
  cursor: pointer;
}

.secondary-btn:hover {
  background: #f8f8f8;
}

.icon-svg {
  width: 24px;
  height: 24px;
}

.tutorial-text {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #1e4670;
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
  opacity: 0.7;
}
</style> 