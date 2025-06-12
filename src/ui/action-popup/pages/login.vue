<template>
    <div class="login-popup" ref="loginPopupRef">
      <div class="watermark" v-html="watermarkSvg"></div>
      <div class="content">
        <div class="header">
          <div class="icon-group">
            <div class="icon settings-icon" v-html="settingsIconSvg"></div>
            <div
              class="icon close-icon"
              v-html="closeIconSvg"
              @click="handleClose"
            ></div>
          </div>
        </div>
  
        <div class="welcome-section">
          <div class="welcome-text">
            <h1 class="title">Welcome!</h1>
            <p class="subtitle">Please sign in.</p>
          </div>
  
          <div class="login-form">
            <div class="input-fields">
              <div class="input-group">
                <div class="input-label">
                  <div class="icon" v-html="accountIconSvg"></div>
                  <span>Vibrant Account</span>
                </div>
                <div class="input-wrapper">
                  <input
                    type="text"
                    placeholder="Username or Email"
                    v-model="username"
                    @input="handleUsernameInput"
                  />
                </div>
              </div>
  
              <div class="input-group">
                <div class="input-label">
                  <div class="icon" v-html="keyIconSvg"></div>
                  <span>Password</span>
                </div>
                <div class="input-wrapper">
                  <input
                    type="password"
                    placeholder="Password"
                    v-model="password"
                    @input="handlePasswordInput"
                  />
                </div>
              </div>
  
              <div class="forgot-password">
                <a href="#" @click.prevent="handleForgotPassword"
                  >Forgot Password?</a
                >
              </div>
            </div>
  
            <button
              class="sign-in-button"
              :class="{ active: isFormValid }"
              @click="handleSignIn"
            >
              Sign In
            </button>
          </div>
        </div>
  
        <div class="brand-footer">
          <div class="logo-wrapper">
            <div class="brand-logo" v-html="logoIconSvg"></div>
            <div class="brand-text" v-html="copilotTextSvg"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from "vue";
  import { usePopupStore } from '../../../stores/popup.store';
  import settingImg from '../../../assets/setting.png';
  
  const popupStore = usePopupStore();
  
  // Component state
  const username = ref("");
  const password = ref("");
  const loginPopupRef = ref(null); // Add ref for the component
  
  // Computed properties
  const isFormValid = computed(() => {
    return username.value.length > 0 && password.value.length > 0;
  });
  
  // Event handlers
  const handleUsernameInput = () => {
    // Add any validation logic here
  };
  
  const handlePasswordInput = () => {
    // Add any validation logic here
  };
  
  const handleSignIn = () => {
    if (!isFormValid.value) return;
    
    // Call the store's signIn method
    popupStore.signIn(username.value, password.value);
    
    // Optional: Close the popup after successful sign-in
    // window.close();
  };
  
  const handleForgotPassword = () => {
  
  
  };
  
  const handleClose = () => {
    // Close the popup window
    window.close();
  };
  
  onMounted(() => {
    // No need to set dimensions dynamically anymore
    // The popup.html will match the component's fixed size
  });
  
  // SVG content as constants
  const watermarkSvg = `<svg id="3222:73331" width="300" height="428" viewBox="0 0 300 428" fill="none" xmlns="http://www.w3.org/2000/svg" class="watermark">
    <!-- SVG content from the design -->
    <g opacity="0.7">
      <g opacity="0.05">
        <!-- SVG paths from the design -->
      </g>
    </g>
  </svg>`;
  
  const settingsIconSvg = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7287 18.7C15.3667 18.436 15.9387 18.062 16.4887 17.644L16.4447 17.71L18.6667 18.568C19.1727 18.766 19.7447 18.568 20.0087 18.084L21.8567 14.872C22.1207 14.41 22.0107 13.794 21.5927 13.464L19.7227 11.968L19.6787 12.034C19.7227 11.682 19.7887 11.33 19.7887 10.978C19.7887 10.626 19.7227 10.274 19.6787 9.922L19.7227 9.988L21.5927 8.492C22.0107 8.162 22.1207 7.546 21.8567 7.084L20.0087 3.872C19.7447 3.41 19.1727 3.19 18.6667 3.388L16.4447 4.246L16.4887 4.312C15.9387 3.938 15.3667 3.564 14.7287 3.3L14.3547 0.924C14.2887 0.396 13.8267 0 13.2767 0H9.58075C9.03075 0 8.56875 0.396 8.50275 0.924L8.12875 3.3C7.49075 3.564 6.91875 3.938 6.36875 4.356L6.41275 4.29L4.16875 3.432C3.66275 3.234 3.09075 3.432 2.82675 3.916L0.978749 7.128C0.714749 7.59 0.824748 8.206 1.24275 8.536L3.11275 10.032L3.15675 9.966C3.11275 10.296 3.04675 10.648 3.04675 11C3.04675 11.352 3.11275 11.704 3.15675 12.056L3.11275 11.99L1.24275 13.486C0.824748 13.816 0.714749 14.432 0.978749 14.894L2.82675 18.106C3.09075 18.568 3.66275 18.788 4.16875 18.59L6.39075 17.732L6.36875 17.644C6.91875 18.062 7.49075 18.436 8.12875 18.7L8.50275 21.054C8.56875 21.604 9.03075 22 9.58075 22H13.2767C13.8267 22 14.2887 21.604 14.3547 21.076L14.7287 18.7ZM7.02875 11C7.02875 8.58 9.00875 6.6 11.4287 6.6C13.8487 6.6 15.8287 8.58 15.8287 11C15.8287 13.42 13.8487 15.4 11.4287 15.4C9.00875 15.4 7.02875 13.42 7.02875 11Z" fill="#C4C4C4"/>
  </svg>`;
  
  const closeIconSvg = `<img src="${settingImg}" alt="close" style="width:22px;height:22px;object-fit:contain;" />`;
  
  const accountIconSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM8.5 9.5C8.5 7.56 10.06 6 12 6C13.94 6 15.5 7.56 15.5 9.5C15.5 11.44 13.94 13 12 13C10.06 13 8.5 11.44 8.5 9.5Z" fill="#374957"/>
  </svg>`;
  
  const keyIconSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10H12.65C11.83 7.67 9.61 6 7 6C3.69 6 1 8.69 1 12C1 15.31 3.69 18 7 18C9.61 18 11.83 16.33 12.65 14H13L15 16L17 14L19 16L23 11.96L21 10ZM7 15C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9C8.65 9 10 10.35 10 12C10 13.65 8.65 15 7 15Z" fill="#374957"/>
  </svg>`;
  
  const logoIconSvg = `<svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Logo SVG content from the design -->
  </svg>`;
  
  const copilotTextSvg = `<svg width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Copilot text SVG content from the design -->
  </svg>`;
  </script>
  
  <style scoped>
  .login-popup {
    display: flex;
    width: 300px;
    height: 428px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    flex-grow: 0;
    border-radius: 20px;
    background: #fff;
    background-image: conic-gradient(
      from 43deg at 50% 50%,
      rgb(223, 243, 247) 0deg,
      rgb(255, 250, 241) 180deg,
      rgb(223, 243, 247) 360deg
    );
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
  }
  
  .watermark {
    display: flex;
    width: 300px;
    height: 428px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 20px;
    opacity: 0.7;
    pointer-events: none;
  }
  
  .content {
    display: flex;
    width: 300px;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    position: relative;
    margin-top: 4px;  /* Add small top margin */
  }
  
  .icon-group {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;
    position: relative;
  }
  
  .welcome-section {
    display: flex;
    padding: 0px 16px;
    flex-direction: column;
    align-items: center;
    gap: 12px;  /* Reduced from 16px */
    align-self: stretch;
    position: relative;
  }
  
  .welcome-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    position: relative;
  }
  
  .title {
    margin: 0;  /* Remove default margins */
    align-self: stretch;
    color: #333;
    text-align: center;
    font-family: "IBM Plex Sans Hebrew", -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 24px;  /* Reduced from 28px */
    font-weight: 500;
    line-height: 36px;  /* Reduced from 44px */
    position: relative;
  }
  
  .subtitle {
    margin: 0;  /* Remove default margins */
    align-self: stretch;
    color: #333;
    text-align: center;
    font-family: "IBM Plex Sans Hebrew", -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 14px;  /* Reduced from 16px */
    font-weight: 400;
    line-height: 20px;  /* Reduced from 24px */
    letter-spacing: 0.5px;
    position: relative;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    align-self: stretch;
    position: relative;
  }
  
  .input-fields {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
    position: relative;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
    position: relative;
  }
  
  .input-label {
    display: flex;
    height: 24px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    position: relative;
    color: #4a4a4a;
    font-family:
      Lato,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 14px;
    font-weight: 700;
  }
  
  .input-wrapper {
    display: flex;
    height: 40px;
    padding: 8px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 4px;
    border: 1px solid #c9c9c9;
    position: relative;
    background-color: #fff;
  }
  
  .input-wrapper input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #333;
    font-family:
      "IBM Plex Sans Hebrew",
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
  
  .input-wrapper input::placeholder {
    color: #999;
  }
  
  .forgot-password {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    align-self: stretch;
    position: relative;
  }
  
  .forgot-password a {
    color: #1e4670;
    text-align: center;
    font-family:
      "IBM Plex Sans Hebrew",
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.5px;
    text-decoration-line: underline;
    padding: 0px 4px;
  }
  
  .sign-in-button {
    color: #fff;
    text-align: center;
    font-family:
      "IBM Plex Sans Hebrew",
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.15px;
    height: 32px;
    padding: 4px 16px;
    gap: 4px;
    border-radius: 15px;
    background-color: #c4c4c4;
    border: none;
    cursor: pointer;
    box-shadow: 0px 1px 3px 0px rgba(74, 74, 74, 0.25);
  }
  
  .sign-in-button.active {
    background-color: #1e4670;
  }
  
  .brand-footer {
    display: flex;
    height: 20px;
    justify-content: center;
    align-items: center;
    gap: 5.956px;
    align-self: stretch;
    position: relative;
  }
  
  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 13.402px;
    align-self: stretch;
    position: relative;
  }

  .icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
  }

  .close-icon:hover {
    opacity: 0.7;
  }

  .settings-icon:hover {
    opacity: 0.7;
  }
  
  @media (max-width: 991px) {
    .login-popup {
      width: 300px;
      height: 428px;
      padding: 14px;
    }
  
    .content {
      width: 252px;
      gap: 20px;
    }
  
    .title {
      font-size: 24px;
      line-height: 36px;
    }
  
    .subtitle {
      font-size: 14px;
      line-height: 20px;
    }
  
    .login-form {
      gap: 28px;
    }
  }
  
  @media (max-width: 640px) {
    .login-popup {
      width: 300px;
      height: 428px;
      padding: 12px;
    }
  
    .content {
      width: 236px;
      gap: 16px;
    }
  
    .title {
      font-size: 22px;
      line-height: 32px;
    }
  
    .subtitle {
      font-size: 13px;
      line-height: 18px;
    }
  
    .input-wrapper {
      height: 36px;
      padding: 6px 10px;
    }
  
    .input-wrapper input {
      font-size: 14px;
      line-height: 20px;
    }
  
    .sign-in-button {
      font-size: 12px;
      line-height: 20px;
      height: 28px;
      padding: 3px 14px;
    }
  }
  
  :host, .login-popup-root {
    background: white;
    border-radius: 8px;
    min-width: 360px;
    min-height: 400px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    /* Remove margin/padding if needed */
  }
  </style>
