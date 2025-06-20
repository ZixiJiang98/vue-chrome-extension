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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                  <path d="M12.2214 1.07656C12.0913 0.97448 11.9107 0.97448 11.7805 1.07656L1.14606 9.32985C1.02047 9.42815 0.969137 9.59735 1.01864 9.75141C1.06814 9.90547 1.20839 10.0094 1.36607 10.0094H3.57345V20.6219C3.57345 20.8308 3.73754 21 3.94013 21H20.0593C20.2619 21 20.426 20.8308 20.426 20.6219V10.0094H22.6334C22.7911 10.0094 22.9313 9.90547 22.9808 9.75141C23.0313 9.59734 22.9799 9.42722 22.8534 9.32985L12.2214 1.07656ZM20.06 9.25436C19.8574 9.25436 19.6933 9.42355 19.6933 9.63243V20.2449H4.30767V9.63243C4.30767 9.42355 4.14358 9.25436 3.94099 9.25436H2.46328L12.0006 1.85159L21.538 9.25436H20.06Z" fill="#374957"/>
                  <path d="M10.2102 9.24527V11.123H8.32453C7.97844 11.123 7.69565 11.4036 7.69565 11.7492V14.0613C7.69565 14.4059 7.97749 14.6865 8.32453 14.6865H10.2102V16.5643C10.2102 16.9089 10.492 17.1905 10.8391 17.1905H13.1609C13.508 17.1905 13.7898 16.9098 13.7898 16.5643V14.6865H15.6755C16.0216 14.6865 16.3043 14.4059 16.3043 14.0613V11.7492C16.3043 11.4036 16.0225 11.123 15.6755 11.123H13.7898V9.24527C13.7898 8.90065 13.508 8.61905 13.1609 8.61905H10.8391C10.492 8.61905 10.2102 8.89969 10.2102 9.24527ZM10.9771 9.38369H13.0219V11.2614C13.0219 11.607 13.3038 11.8876 13.6508 11.8876H15.5365V13.9238H13.6508C13.3038 13.9238 13.0219 14.2044 13.0219 14.55V16.4277H10.9771V14.55C10.9771 14.2044 10.6953 13.9238 10.3482 13.9238H8.46257V11.8876H10.3482C10.6953 11.8876 10.9771 11.607 10.9771 11.2614V9.38369Z" fill="#374957"/>
                </svg>
              </div>
              <div class="practice-label">Practice</div>
            </div>
          </div>
          <SingleSelector 
            class="single-selector"
            input-title="Required Information"
            value-field="id" 
            :has-label="true"
            :placeholder="'Choose a practice'"
            :options="singleSelectorList"
            v-model="selectedOption"
            @change="handleSelectedOptionClick"
          />
        </div>
      </div>

      <!-- <div class="clinic-selection">
        <div class="input-section">
          <div class="practice-field">
            <div class="practice-label-container">
              <div class="clinic-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                  <path d="M12.2214 1.07656C12.0913 0.97448 11.9107 0.97448 11.7805 1.07656L1.14606 9.32985C1.02047 9.42815 0.969137 9.59735 1.01864 9.75141C1.06814 9.90547 1.20839 10.0094 1.36607 10.0094H3.57345V20.6219C3.57345 20.8308 3.73754 21 3.94013 21H20.0593C20.2619 21 20.426 20.8308 20.426 20.6219V10.0094H22.6334C22.7911 10.0094 22.9313 9.90547 22.9808 9.75141C23.0313 9.59734 22.9799 9.42722 22.8534 9.32985L12.2214 1.07656ZM20.06 9.25436C19.8574 9.25436 19.6933 9.42355 19.6933 9.63243V20.2449H4.30767V9.63243C4.30767 9.42355 4.14358 9.25436 3.94099 9.25436H2.46328L12.0006 1.85159L21.538 9.25436H20.06Z" fill="#374957"/>
                  <path d="M10.2102 9.24527V11.123H8.32453C7.97844 11.123 7.69565 11.4036 7.69565 11.7492V14.0613C7.69565 14.4059 7.97749 14.6865 8.32453 14.6865H10.2102V16.5643C10.2102 16.9089 10.492 17.1905 10.8391 17.1905H13.1609C13.508 17.1905 13.7898 16.9098 13.7898 16.5643V14.6865H15.6755C16.0216 14.6865 16.3043 14.4059 16.3043 14.0613V11.7492C16.3043 11.4036 16.0225 11.123 15.6755 11.123H13.7898V9.24527C13.7898 8.90065 13.508 8.61905 13.1609 8.61905H10.8391C10.492 8.61905 10.2102 8.89969 10.2102 9.24527ZM10.9771 9.38369H13.0219V11.2614C13.0219 11.607 13.3038 11.8876 13.6508 11.8876H15.5365V13.9238H13.6508C13.3038 13.9238 13.0219 14.2044 13.0219 14.55V16.4277H10.9771V14.55C10.9771 14.2044 10.6953 13.9238 10.3482 13.9238H8.46257V11.8876H10.3482C10.6953 11.8876 10.9771 11.607 10.9771 11.2614V9.38369Z" fill="#374957"/>
                </svg>
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

      </div> -->
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
        v-if="!selectedOption"
        type="round"
        class="sign-in-button"
        @click="handleContinue"
      >
        Continue
      </Button>
      <Button
        v-else
        type="round"
        color-type="dark-blue"
        class="sign-in-button-lib"
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
import SingleSelector from '../../../NewLibrary/SingleSelector.vue'

const router = useRouter()
const popupStore = usePopupStore()
const selectedOption = ref<SingleSelectorItem | null>(null)
const isDropdownOpen = ref(false)

interface ClinicOption {
  id: number;
  name: string;
  address: string;
}
interface SingleSelectorItem {
  id: number;
  label: string;
  desc: string;
}

// 将 popupStore.clinicOptions 转为 singleSelectorList 结构
function convertToSingleSelectorList(clinicOptions: ClinicOption[]): SingleSelectorItem[] {
  return clinicOptions.map((item) => ({
    id: item.id,
    label: item.name,
    desc: item.address
  }))
}

const singleSelectorList = computed(() => convertToSingleSelectorList(popupStore.clinicOptions))

const handleSelectedOptionClick = (selectedOption: SingleSelectorItem) => { 
  console.log(singleSelectorList,'singleSelectorList')
  console.log(selectedOption,'selectedOption')
}


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
  height: 312px;
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
  gap: 4px;
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

.single-selector {
  width: 236px;
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

.input-height {
  height: 40px;
}

.sign-in-button {
  padding: 0px 16px;
}

.forgot-password-link {
  height: 16px;
}

.sign-in-button-lib {
  padding: 0px 16px;
  cursor: pointer;
}
</style>
