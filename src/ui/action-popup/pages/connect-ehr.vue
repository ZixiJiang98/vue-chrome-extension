<template>
  <div class="container">
    <div class="content">
      <div class="title">Nice Choice!</div>
      <div class="description">Please connect EHR to your Vibrant account to enjoy the full access to all features. Or watch the tutorial to learn how.</div>
      <div class="button-group">
        <button class="primary-btn" @click="goToEnterCredential">
          <span class="star">***</span>
          <span class="btn-text">Enter Credential Key</span>
        </button>
        <button class="secondary-btn">
          <span class="icon">
            <!-- Play icon -->
            <svg viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-svg">
              <path d="M8 4V12L15 8L8 4ZM20 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H7V18H15V16H20C21.1 16 22 15.1 22 14V2C22 0.9 21.1 0 20 0ZM20 14H2V2H20V14Z" fill="#374957"/>
            </svg>
          </span>
          <span class="btn-secondary-text">Watch Tutorial</span>
        </button>
      </div>
      <div class="skip-wrapper">
        <router-link to="/action-popup/skip-page" class="skip-link">Skip for now</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goToEnterCredential = () => {
  router.push('/enter-credential')
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
  gap: 24px;
}

.title {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  color: #333333;
  text-align: center;
}

.description {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: #333333;
  text-align: center;
}

.button-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.primary-btn {
  width: 100%;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #004879;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgba(74, 74, 74, 0.25);
  cursor: pointer;
}

.star {
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 2px;
}

.btn-text {
  color: #ffffff;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.secondary-btn {
  width: 100%;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #1e4670;
  border-radius: 15px;
  box-shadow: 0px 1px 3px rgba(74, 74, 74, 0.25);
  cursor: pointer;
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

.btn-secondary-text {
  color: #1e4670;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-size: 16px;
  line-height: 24px;
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