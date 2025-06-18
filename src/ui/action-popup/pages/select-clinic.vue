<template>
  <div class="welcome-login-container">
    <div class="welcome-login-section">
        <!-- Welcome Text -->
      <div class="welcome-text">
        <h1 class="welcome-title">Welcome!</h1>
        <p class="welcome-subtitle">Select a clinic.</p>
      </div>
      <div class="clinic-selection">
        <div class="input-section">
          <div class="practice-field">
            <div class="practice-label-container">
              <div class="clinic-icon">
                <img src="@assets/icons/clinicIcon.png" alt="Clinic Icon" width="24" height="24">
              </div>
              <div class="practice-label">Practice</div>
            </div>
            <div class="dropdown-container">
              <div
                class="dropdown-trigger"
                @click="toggleDropdown"
              >
                <div class="dropdown-option">
                  <div class="selected-option">
                    {{ selectedOption || "Choose a practice" }}
                  </div>
                  <div class="dropdown-arrow">
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      :class="{ rotated: isDropdownOpen }"
                    >
                      <path
                        d="M1.645 -7.19052e-08L-2.83151e-07 1.52227L7 8L14 1.52227L12.355 -5.40054e-07L7 4.94467L1.645 -7.19052e-08Z"
                        fill="#374957"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                v-show="isDropdownOpen"
                class="dropdown-options"
              >
                <div
                  v-for="clinic in popupStore.clinicOptions"
                  :key="clinic.id"
                  class="dropdown-option-item"
                  :class="{ 'last-option': clinic.id === popupStore.clinicOptions.length }"
                  @click="selectOption(clinic)"
                >
                  <div class="option-content-with-icon">
                    <div class="clinic-option-text">{{ clinic.name }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Continue Button -->

      </div>
      <!-- <div class="continue-section">
          <button 
            class="continue-button" 
            :class="{ active: selectedOption }"
            @click="handleContinue"
            :disabled="!selectedOption"
          >
            Continue
          </button>
        </div>
      </div> -->
      <Button
        type="round"
        color-type="dark-blue"
        @click="handleContinue"
      >
        Continue
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { usePopupStore } from '../../../stores/popup.store'
import Button from '../../../NewLibrary/Button.vue'

const router = useRouter()
const popupStore = usePopupStore()
const selectedOption = ref("")
const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectOption = (clinic: { id: number; name: string; address: string }) => {
  selectedOption.value = clinic.name
  popupStore.selectClinic(clinic.name)
  isDropdownOpen.value = false
}

const handleContinue = async () => {
  if (!selectedOption.value) return
  
  try {
    // Only call selectClinic once
    popupStore.selectClinic(selectedOption.value)
    console.log('Navigating to select-sync page...')
    await router.push('/action-popup/select-sync')
  } catch (error) {
    console.error('Navigation failed:', error)
  }
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

/* Welcome and Login Section */
.welcome-login-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 16px;
  width: 100%;
  height: 306px;
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


.clinic-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex: 1 0 0;
  align-self: stretch;
  position: relative;
}


.input-section {
  display: flex;
  padding: 16px 0px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
  position: relative;
}
/* 
@media (max-width: 991px) {
  .input-section {
    padding: 12px 0px;
    gap: 12px;
  }
}

@media (max-width: 640px) {
  .input-section {
    padding: 8px 0px;
    gap: 8px;
  }
} */

.practice-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  position: relative;
}

.practice-label-container {
  display: flex;
  height: 24px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  position: relative;
}

.clinic-icon {
  display: flex;
  width: 24px;
  height: 24px;
  padding: 2px 1px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
}

.practice-label {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #4a4a4a;
  text-overflow: ellipsis;
  font-family: Lato, sans-serif;
  font-size: 14px;
  font-weight: 700;
  position: relative;
}

/* @media (max-width: 640px) {
  .practice-label {
    font-size: 12px;
  }
} */

.dropdown-container {
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: -2px;
  align-self: stretch;
  border-radius: 4px;
  position: relative;
}

.dropdown-trigger {
  display: flex;
  height: 40px;
  padding: 8px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid #c4c4c4;
  position: relative;
  background-color: #fff;
  cursor: pointer;
}

.dropdown-option {
  display: flex;
  padding: 0px 2px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 4px;
  position: relative;
}

.selected-option {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #999;
  text-overflow: ellipsis;
  font-family: "IBM Plex Sans Hebrew", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  position: relative;
  padding: 0px 4px;
  gap: 8px;
}
/* 
@media (max-width: 640px) {
  .selected-option {
    font-size: 14px;
    line-height: 20px;
  }
} */

.dropdown-arrow {
  display: flex;
  width: 24px;
  height: 24px;
  padding: 8px 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  transition: transform 0.2s ease;
}

.dropdown-arrow svg {
  transform: rotate(-90deg);
}

.dropdown-arrow.rotated svg {
  transform: rotate(0deg);
}

.dropdown-options {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  background-color: #fff;
  z-index: 10;
}

.dropdown-option-item {
  display: flex;
  height: 40px;
  padding: 8px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-right: 1px solid #c4c4c4;
  border-left: 1px solid #c4c4c4;
  position: relative;
  background-color: #fff;
  cursor: pointer;
}

.dropdown-option-item:hover {
  background-color: #f5f5f5;
}

.default-option-item {
  border-top: none;
}

.last-option {
  border-radius: 0px 0px 4px 4px;
  border-bottom: 1px solid #c4c4c4;
}

.option-content {
  display: flex;
  padding: 0px 2px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  position: relative;
}

.option-text {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  color: #999;
  text-overflow: ellipsis;
  font-family: "IBM Plex Sans Hebrew", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  position: relative;
  padding: 0px 4px;
  gap: 8px;
}

/* @media (max-width: 640px) {
  .option-text {
    font-size: 14px;
    line-height: 20px;
  }
} */

.option-content-with-icon {
  display: flex;
  padding: 0px 2px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  position: relative;
}

.clinic-option-text {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  color: #999;
  text-overflow: ellipsis;
  font-family: "IBM Plex Sans Hebrew", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  position: relative;
  padding: 0px 4px;
}

/* @media (max-width: 640px) {
  .clinic-option-text {
    font-size: 14px;
    line-height: 20px;
  }
} */

.continue-section {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.continue-button {
  display: flex;
  height: 32px;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  gap: var(--Spacing, 4px);
  border-radius: 15px;
  background: var(--VibrantDarkBlue, #004879);
  box-shadow: 0px 1px 3px 0px rgba(74, 74, 74, 0.25);
  border: none;
  color: #FFFFFF;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.continue-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
  background: #C4C4C4;
}

.continue-button:not(:disabled):hover {
  background: #003d66;
}
</style>
