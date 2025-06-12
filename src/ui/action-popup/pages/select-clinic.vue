<template>
  <div class="select-clinic-popup" ref="selectClinicRef">
    <div class="watermark" v-html="watermarkSvg"></div>
    <div class="content">
      <div class="header">
        <div class="user-info">
          <div class="user-avatar" v-html="accountIconSvg"></div>
          <span class="username">Vibrant IT3</span>
        </div>
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
          <p class="subtitle">Select a clinic.</p>
        </div>

        <div class="clinic-form">
          <div class="input-fields">
            <div class="input-group">
              <div class="input-label">
                <div class="icon" v-html="clinicIconSvg"></div>
                <span>Practice</span>
              </div>
              <div class="dropdown-wrapper" :class="{ 'is-open': isDropdownOpen }">
                <div class="dropdown-trigger" @click="toggleDropdown">
                  <span class="dropdown-text">{{ selectedClinic || 'Choose a practice' }}</span>
                  <div class="dropdown-arrow" v-html="expandArrowSvg"></div>
                </div>
                <div class="dropdown-options" v-if="isDropdownOpen">
                  <div 
                    class="dropdown-option" 
                    v-for="clinic in clinicOptions" 
                    :key="clinic.id"
                    @click="selectClinic(clinic)"
                  >
                    <div class="option-icon" v-html="imageIconSvg"></div>
                    <span class="option-text">{{ clinic.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            class="continue-button"
            :class="{ active: selectedClinic }"
            @click="handleContinue"
            :disabled="!selectedClinic"
          >
            Continue
          </button>
        </div>
      </div>

      <div class="brand-footer">
        <div class="logo-wrapper">
          <div class="brand-logo" v-html="logoIconSvg"></div>
          <div class="brand-text">
            <div class="vibrant-logo" v-html="vibrantLogoSvg"></div>
            <span class="copilot-text">Copilot</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { usePopupStore } from '../../../stores/popup.store';

// Define emits
const emit = defineEmits<{
  'clinic-selected': [clinic: string]
}>();

const popupStore = usePopupStore();

// Component state
const selectClinicRef = ref<HTMLElement | null>(null);
const selectedClinic = ref("");
const isDropdownOpen = ref(false);

// Clinic options based on the Figma design
const clinicOptions = ref([
  { id: 1, name: "Option 1" },
  { id: 2, name: "Clinic 1" },
  { id: 3, name: "Clinic 2" },
  { id: 4, name: "Option 4" },
  { id: 5, name: "Option 5" },
  { id: 6, name: "Option 6" },
  { id: 7, name: "Option 7" },
  { id: 8, name: "Option 8" },
  { id: 9, name: "Option 9" },
  { id: 10, name: "Option 10" },
  { id: 11, name: "Option 11" },
  { id: 12, name: "Option 12" }
]);

// Event handlers
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectClinic = (clinic: { id: number; name: string }) => {
  selectedClinic.value = clinic.name;
  isDropdownOpen.value = false;
};

const handleContinue = () => {
  if (!selectedClinic.value) return;
  
  // Emit the clinic selection event
  emit('clinic-selected', selectedClinic.value);
};

const handleClose = () => {
  // Close the popup window
  window.close();
};

onMounted(() => {
  // Close dropdown when clicking outside
  const handleClickOutside = (event: Event) => {
    if (selectClinicRef.value && event.target instanceof Node && !selectClinicRef.value.contains(event.target)) {
      isDropdownOpen.value = false;
    }
  };
  
  document.addEventListener('click', handleClickOutside);
  
  // Cleanup event listener on unmount
  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
});

// SVG content as constants
const watermarkSvg = `<svg width="589" height="658" viewBox="0 0 589 658" fill="none" xmlns="http://www.w3.org/2000/svg" class="watermark">
  <g opacity="0.05">
    <path d="M294.5 329C294.5 329 294.5 329 294.5 329Z" fill="#004879"/>
  </g>
</svg>`;

const accountIconSvg = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM13.77 12.6225C12.6975 11.3175 10.095 10.875 9 10.875C7.905 10.875 5.3025 11.3175 4.23 12.6225C3.465 11.6175 3 10.365 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 10.365 14.535 11.6175 13.77 12.6225ZM6.375 7.125C6.375 5.67 7.545 4.5 9 4.5C10.455 4.5 11.625 5.67 11.625 7.125C11.625 8.58 10.455 9.75 9 9.75C7.545 9.75 6.375 8.58 6.375 7.125Z" fill="#374957"/>
</svg>`;

const settingsIconSvg = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.7287 18.7C15.3667 18.436 15.9387 18.062 16.4887 17.644L16.4447 17.71L18.6667 18.568C19.1727 18.766 19.7447 18.568 20.0087 18.084L21.8567 14.872C22.1207 14.41 22.0107 13.794 21.5927 13.464L19.7227 11.968L19.6787 12.034C19.7227 11.682 19.7887 11.33 19.7887 10.978C19.7887 10.626 19.7227 10.274 19.6787 9.922L19.7227 9.988L21.5927 8.492C22.0107 8.162 22.1207 7.546 21.8567 7.084L20.0087 3.872C19.7447 3.41 19.1727 3.19 18.6667 3.388L16.4447 4.246L16.4887 4.312C15.9387 3.938 15.3667 3.564 14.7287 3.3L14.3547 0.924C14.2887 0.396 13.8267 0 13.2767 0H9.58075C9.03075 0 8.56875 0.396 8.50275 0.924L8.12875 3.3C7.49075 3.564 6.91875 3.938 6.36875 4.356L6.41275 4.29L4.16875 3.432C3.66275 3.234 3.09075 3.432 2.82675 3.916L0.978749 7.128C0.714749 7.59 0.824748 8.206 1.24275 8.536L3.11275 10.032L3.15675 9.966C3.11275 10.296 3.04675 10.648 3.04675 11C3.04675 11.352 3.11275 11.704 3.15675 12.056L3.11275 11.99L1.24275 13.486C0.824748 13.816 0.714749 14.432 0.978749 14.894L2.82675 18.106C3.09075 18.568 3.66275 18.788 4.16875 18.59L6.39075 17.732L6.36875 17.644C6.91875 18.062 7.49075 18.436 8.12875 18.7L8.50275 21.054C8.56875 21.604 9.03075 22 9.58075 22H13.2767C13.8267 22 14.2887 21.604 14.3547 21.076L14.7287 18.7ZM7.02875 11C7.02875 8.58 9.00875 6.6 11.4287 6.6C13.8487 6.6 15.8287 8.58 15.8287 11C15.8287 13.42 13.8487 15.4 11.4287 15.4C9.00875 15.4 7.02875 13.42 7.02875 11Z" fill="#C4C4C4"/>
</svg>`;

const closeIconSvg = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4163 5.876L16.1238 4.5835L10.9997 9.70766L5.87551 4.5835L4.58301 5.876L9.70717 11.0002L4.58301 16.1243L5.87551 17.4168L10.9997 12.2927L16.1238 17.4168L17.4163 16.1243L12.2922 11.0002L17.4163 5.876Z" fill="#374957"/>
</svg>`;

const clinicIconSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 8L15 4H5C3.89 4 3 4.89 3 6V18C3 19.1 3.89 20 5 20H19C20.1 20 21 19.1 21 18V10C21 8.89 20.1 8 19 8ZM7 18C5.9 18 5 17.1 5 16C5 14.9 5.9 14 7 14C8.1 14 9 14.9 9 16C9 17.1 8.1 18 7 18ZM9.5 12C8.1 12 7 10.9 7 9.5C7 8.1 8.1 7 9.5 7C10.9 7 12 8.1 12 9.5C12 10.9 10.9 12 9.5 12Z" stroke="#374957" stroke-width="1" fill="none"/>
</svg>`;

const expandArrowSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 10L12 15L17 10H7Z" fill="#374957"/>
</svg>`;

const imageIconSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#374957"/>
</svg>`;

const logoIconSvg = `<svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.5 0L23 20H0L11.5 0Z" fill="#004879"/>
</svg>`;

const vibrantLogoSvg = `<svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0H32V8H0V0Z" fill="url(#paint0_linear)"/>
  <defs>
    <linearGradient id="paint0_linear" x1="16" y1="0" x2="16" y2="8" gradientUnits="userSpaceOnUse">
      <stop stop-color="#004879"/>
      <stop offset="1" stop-color="#8BBDC7"/>
    </linearGradient>
  </defs>
</svg>`;
</script>

<style scoped>
.select-clinic-popup {
  display: flex;
  width: 300px;
  height: 428px;
  padding: 16px;
  justify-content: stretch;
  align-items: stretch;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  background-image: conic-gradient(
    from 43deg at 50% 50%,
    rgb(223, 243, 247) 0deg,
    rgb(255, 250, 241) 180deg,
    rgb(223, 243, 247) 360deg
  );
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.25);
  position: relative;
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
  flex-direction: column;
  align-items: flex-end;
  align-self: stretch;
  gap: 24px;
  flex: 1;
  position: relative;
  z-index: 1;
}

.header {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  align-self: stretch;
  gap: 161px;
}

.user-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.user-avatar {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.username {
  color: #999;
  font-family: "IBM Plex Sans Hebrew", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.25px;
}

.icon-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.welcome-section {
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  flex: 1;
}

.welcome-text {
  display: flex;
  flex-direction: column;
  align-self: stretch;
}

.title {
  margin: 0;
  align-self: stretch;
  color: #333;
  text-align: center;
  font-family: "IBM Plex Sans Hebrew", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 28px;
  font-weight: 500;
  line-height: 44px;
}

.subtitle {
  margin: 0;
  align-self: stretch;
  color: #333;
  text-align: center;
  font-family: "IBM Plex Sans Hebrew", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
}

.clinic-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 32px;
  flex: 1;
}

.input-fields {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 16px;
  padding: 16px 0px;
  flex: 1;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 4px;
}

.input-label {
  display: flex;
  height: 24px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #4a4a4a;
  font-family: Lato, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.8px;
}

.dropdown-wrapper {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: -2px;
  position: relative;
}

.dropdown-trigger {
  display: flex;
  height: 40px;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid #c4c4c4;
  background: #fff;
  cursor: pointer;
}

.dropdown-text {
  color: #999;
  font-family: "IBM Plex Sans Hebrew", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  flex: 1;
}

.dropdown-arrow {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 5px;
}

.dropdown-options {
  position: absolute;
  top: 38px;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #c4c4c4;
  border-top: none;
  border-radius: 0px 0px 4px 4px;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown-option {
  display: flex;
  height: 40px;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #c4c4c4;
  cursor: pointer;
  background: #fff;
}

.dropdown-option:hover {
  background: #f5f5f5;
}

.dropdown-option:last-child {
  border-bottom: none;
  border-radius: 0px 0px 4px 4px;
}

.option-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
}

.option-text {
  color: #999;
  font-family: "IBM Plex Sans Hebrew", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  flex: 1;
}

.continue-button {
  color: #fff;
  text-align: center;
  font-family: "IBM Plex Sans Hebrew", -apple-system, Roboto, Helvetica, sans-serif;
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
  transition: background-color 0.2s ease;
}

.continue-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.continue-button.active {
  background-color: #1e4670;
}

.brand-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 5.956px;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 13.402px;
}

.brand-logo {
  width: 22.5px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-text {
  display: flex;
  align-items: center;
  gap: 4px;
}

.vibrant-logo {
  width: 32.25px;
  height: 7.45px;
}

.copilot-text {
  color: transparent;
  background: linear-gradient(180deg, #004879 0%, #8BBDC7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  font-family: "IBM Plex Sans Hebrew", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 10.42px;
  font-weight: 500;
  line-height: 14.89px;
  letter-spacing: 0.074px;
  text-align: center;
}

.icon {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
}

.close-icon:hover,
.settings-icon:hover {
  opacity: 0.7;
}

/* Responsive adjustments */
@media (max-width: 991px) {
  .select-clinic-popup {
    width: 320px;
    height: 448px;
    padding: 18px;
  }
}

@media (max-width: 640px) {
  .select-clinic-popup {
    width: 300px;
    height: 428px;
    padding: 16px;
  }

  .title {
    font-size: 24px;
    line-height: 36px;
  }

  .subtitle {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
