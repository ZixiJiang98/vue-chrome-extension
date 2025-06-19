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
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
              >
                <path 
                  fill-rule="evenodd" 
                  clip-rule="evenodd" 
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM8.5 9.5C8.5 7.56 10.06 6 12 6C13.94 6 15.5 7.56 15.5 9.5C15.5 11.44 13.94 13 12 13C10.06 13 8.5 11.44 8.5 9.5Z" 
                  fill="#374957"
                />
              </svg>
              <span class="label-text">Vibrant Account</span>
            </div>
            <Input
              v-model="username"
              placeholder="Username or Email"
            />
          </div>
          <!-- Password Field -->
          <div class="input-field">
            <div class="field-label">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
              >
                <path 
                  d="M21 10H12.65C11.83 7.67 9.61 6 7 6C3.69 6 1 8.69 1 12C1 15.31 3.69 18 7 18C9.61 18 11.83 16.33 12.65 14H13L15 16L17 14L19 16L23 11.96L21 10ZM7 15C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9C8.65 9 10 10.35 10 12C10 13.65 8.65 15 7 15Z" 
                  fill="#374957"
                />
              </svg>
              <span class="label-text">Password</span>
            </div>
            <!-- <div class="input-wrapper">
              <input
                type="password"
                placeholder="Password"
                class="text-input"
                v-model="password"
              />
            </div> -->
            <Input 
              v-model="password"
              placeholder="Password"
            />
          </div>
          <!-- Forgot Password Link -->
          <div class="forgot-password-wrapper">
            <Button
              type="none-stroke"
              @click="handleForgotPassword"
            >
              Forgot Password?
            </Button>
          </div>
        </div>
        <!-- Sign In Button -->
        <Button
          type="round"
          color-type="dark-blue"
          @click="handleSignIn"
        >
          Sign In
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePopupStore } from '../../../stores/popup.store'
import { useRouter } from 'vue-router'
import Button from '../../../NewLibrary/Button.vue'
import Input from '../../../NewLibrary/Input.vue'

const popupStore = usePopupStore()
const router = useRouter()

const username = ref('')
const password = ref('')

const handleSignIn = () => {
  if (username.value && password.value) {
    popupStore.signIn(username.value, password.value)
    router.push('/select-clinic')
  }
}

const handleForgotPassword = () => {
  // TODO: Implement forgot password logic
  console.log('Forgot password clicked')
}
</script>

<style scoped>
.welcome-login-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: stretch;
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 16px;
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

/* Login Form */
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 32px;
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
  align-items: center;
  gap: 4px;
  height: 24px;
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
  letter-spacing: 0.94%;
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
  font-size: 11px;
  line-height: 16px;
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
  background: #C4C4C4;
  border-radius: 15px;
  border: none;
  box-shadow: 0px 1px 3px 0px rgba(74, 74, 74, 0.25);
  cursor: pointer;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.71em;
  letter-spacing: 1.07%;
  text-align: center;
  color: #FFFFFF;
}

.sign-in-button:hover {
  background: #B0B0B0;
}

.sign-in-button:active {
  background: #A0A0A0;
}

.sign-in-button:disabled {
  background: #E0E0E0;
  cursor: not-allowed;
}
</style>
