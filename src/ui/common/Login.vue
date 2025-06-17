<template>
  <div class="login-container">
    <!-- Header with Settings and Minimize buttons -->
    <div class="header-section">
      <div class="header-spacer"></div>
      <div class="header-controls">
        <!-- Settings icon -->
        <div class="control-icon">
          <svg width="21.16" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z" fill="#C4C4C4"/>
            <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.67 19.18 11.36 19.14 11.06L21.16 9.48C21.34 9.34 21.39 9.07 21.28 8.87L19.36 5.55C19.24 5.33 18.99 5.26 18.77 5.33L16.38 6.29C15.88 5.91 15.35 5.59 14.76 5.35L14.4 2.81C14.36 2.57 14.16 2.4 13.92 2.4H10.08C9.84 2.4 9.64 2.57 9.6 2.81L9.24 5.35C8.65 5.59 8.12 5.92 7.62 6.29L5.23 5.33C5.01 5.25 4.76 5.33 4.64 5.55L2.72 8.87C2.61 9.08 2.66 9.34 2.84 9.48L4.86 11.06C4.82 11.36 4.8 11.68 4.8 12C4.8 12.32 4.82 12.64 4.86 12.94L2.84 14.52C2.66 14.66 2.61 14.93 2.72 15.13L4.64 18.45C4.76 18.67 5.01 18.74 5.23 18.67L7.62 17.71C8.12 18.09 8.65 18.41 9.24 18.65L9.6 21.19C9.64 21.43 9.84 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.4 21.19L14.76 18.65C15.35 18.41 15.88 18.08 16.38 17.71L18.77 18.67C18.99 18.75 19.24 18.67 19.36 18.45L21.28 15.13C21.39 14.92 21.34 14.66 21.16 14.52L19.14 12.94Z" fill="#C4C4C4"/>
          </svg>
        </div>
        <!-- Close/Minimize icon -->
        <div class="control-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M16.5 5.5L5.5 16.5M5.5 5.5L16.5 16.5" stroke="#374957" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>

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
            <button class="forgot-password-link" @click="handleForgotPassword">
              Forgot Password?
            </button>
          </div>
        </div>

        <!-- Sign In Button -->
        <button class="sign-in-button" @click="handleSignIn">
          Sign In
        </button>
      </div>
    </div>

    <!-- Vibrant Logo -->
    <VibrantLogo />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VibrantLogo from './VibrantLogo.vue'

const username = ref('')
const password = ref('')

const handleSignIn = () => {
  // TODO: Implement sign in logic
  console.log('Sign in clicked', { username: username.value, password: password.value })
}

const handleForgotPassword = () => {
  // TODO: Implement forgot password logic
  console.log('Forgot password clicked')
}
</script>

<script lang="ts">
export default {
  name: 'Login'
}
</script>

<style scoped>
.login-container {
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
  padding: 0 16px;
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
  justify-content: center;
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
}

.sign-in-button:hover {
  background: #B0B0B0;
}

.sign-in-button:active {
  background: #A0A0A0;
}

.sign-in-button {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.71em;
  letter-spacing: 1.07%;
  text-align: center;
  color: #FFFFFF;
}
</style>
