<template>
  <div class="welcome-login-container">


    <!-- Welcome and Login Section -->
    <div class="welcome-login-section">
      <!-- Welcome Text -->
      <div class="welcome-text">
        <h1 class="welcome-title">Welcome!</h1>
        <p class="welcome-subtitle">Please sign in.</p>
      </div>

      <!-- Login Form -->
      <div class="login-form">
        <!-- Input Fields -->
        <div class="input-fields">
          <!-- Username/Email Field -->
          <div class="input-field">
            <div class="field-label">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#374957"/>
              </svg>
              <span class="label-text">Vibrant Account</span>
            </div>
            <div class="input-wrapper">
              <input 
                type="text" 
                placeholder="Username or Email" 
                class="text-input"
                v-model="username"
              />
            </div>
          </div>

          <!-- Password Field -->
          <div class="input-field">
            <div class="field-label">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 8H17V6C17 3.24 14.76 1 12 1S7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15S10.9 13 12 13S14 13.9 14 15S13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9S15.1 4.29 15.1 6V8Z" fill="#374957"/>
              </svg>
              <span class="label-text">Password</span>
            </div>
            <div class="input-wrapper">
              <input 
                type="password" 
                placeholder="Password" 
                class="text-input"
                v-model="password"
              />
            </div>
          </div>

          <!-- Forgot Password Link -->
          <div class="forgot-password-wrapper">
            <a
              class="forgot-password-link"
              href="https://portal.vibrant-wellness.com/#/forgot-password"
              target="_blank"
              rel="noopener noreferrer"
            >
              Forgot Password?
            </a>
          </div>
        </div>

        <!-- Sign In Button -->
        <button :class="['sign-in-button', { enabled: canSignIn }]" :disabled="!canSignIn" @click="handleSignIn">
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { usePopupStore } from '../../../stores/popup.store'

const popupStore = usePopupStore()
const router = useRouter()

const username = ref('')
const password = ref('')

// Disable Sign-In button until both fields have a value
const canSignIn = computed(() => username.value.trim() !== '' && password.value.trim() !== '')

const handleSignIn = () => {
  if (!canSignIn.value) return

  popupStore.signIn(username.value, password.value)
  router.push('/select-clinic')
}

const handleForgotPassword = () => {
  // TODO: Implement forgot password logic
  console.log('Forgot password clicked')
}
</script>

<style scoped>
/* Root container */
.welcome-login-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* centre the whole card on the x-axis */
  justify-content: flex-start;
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 0px 32px;
  box-sizing: border-box;
}

/* Header Section */
.header-section {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  align-self: stretch;
  gap: 161px;
  width: 100%;
  height: auto;
}

.header-spacer {
  flex: 1;
}

.header-controls {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
  height: auto;
}

.control-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  cursor: pointer;
}

.control-icon:hover {
  opacity: 0.7;
}

/* Welcome and Login Section */
.welcome-login-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 360px; /* match Figma card width */
  margin: auto;
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
  line-height: 24px; /* 1.5em */
  letter-spacing: 0.5px; /* according to Figma Web_LargeBody_16 */
  text-align: center;
  color: #333333;
  margin: 0;
}

/* Login Form */
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 32px;
  width: 100%;
}

.input-fields {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 4px;
  width: 100%;
}

.input-field {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 4px;
  width: 100%;
}

.field-label {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  height: 24px;
  padding-left: 12px;
  box-sizing: border-box;
}

.label-text {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2em;
  color: #4A4A4A;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  gap: 10px;
  padding: 8px 12px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #C9C9C9;
  border-radius: 4px;
  box-sizing: border-box;
}

.text-input {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  letter-spacing: 0.15px; /* W&M_InputField_Content */
  color: #999999;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
}

.text-input::placeholder {
  color: #999999;
}

.text-input:focus {
  color: #333333;
}

.forgot-password-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: stretch;
  gap: 10px;
  width: 100%;
}

.forgot-password-link {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 11px;
  line-height: 1.45em;
  letter-spacing: 4.55%;
  text-align: center;
  color: #1E4670;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 4px;
}

.forgot-password-link:hover {
  text-decoration: underline;
}

/* Sign In Button */
.sign-in-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px 16px;
  height: 32px;
  background: #C4C4C4; /* disabled default */
  border-radius: 15px;
  border: none;
  box-shadow: 0px 1px 3px rgba(74, 74, 74, 0.25);
  cursor: pointer;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: center;
  color: #ffffff;
  transition: background 0.2s ease;
}

.sign-in-button.enabled {
  background: #004879;
}

.sign-in-button.enabled:hover {
  background: #063a5e;
}
</style>
