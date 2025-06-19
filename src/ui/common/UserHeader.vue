<template>
  <div class="user-header">
    <!-- Left side: User and Clinic info -->
    <div class="user-info-section">
      <!-- User info -->
      <div class="info-item">
        <div class="account-icon">
          <img src="@/assets/icons/accountIcon.png" alt="Account" width="16" height="16" />
        </div>
        <span class="info-text">{{ username }}</span>
      </div>
      
      <!-- Clinic info -->
      <div class="info-item">
        <div class="clinic-icon">
          <img src="@/assets/icons/clinicIcon.png" alt="Clinic" width="16" height="16" />
        </div>
        <span class="info-text">{{ clinicName }}</span>
      </div>
    </div>

    <!-- Right side: Control icons -->
    <div class="control-icons">
      <!-- Settings icon -->
      <!-- <button class="control-button settings-button" @click="$emit('settings-click')" aria-label="Settings">
        <img :src="settingIcon" alt="Settings" class="icon-image" />
      </button> -->
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="22" 
        height="22" 
        viewBox="0 0 22 22" 
        fill="none"
        @click="$emit('settings-click')"
      >
        <path d="M14.7287 18.7C15.3667 18.436 15.9387 18.062 16.4887 17.644L16.4447 17.71L18.6667 18.568C19.1727 18.766 19.7447 18.568 20.0087 18.084L21.8567 14.872C22.1207 14.41 22.0107 13.794 21.5927 13.464L19.7227 11.968L19.6787 12.034C19.7227 11.682 19.7887 11.33 19.7887 10.978C19.7887 10.626 19.7227 10.274 19.6787 9.922L19.7227 9.988L21.5927 8.492C22.0107 8.162 22.1207 7.546 21.8567 7.084L20.0087 3.872C19.7447 3.41 19.1727 3.19 18.6667 3.388L16.4447 4.246L16.4887 4.312C15.9387 3.938 15.3667 3.564 14.7287 3.3L14.3547 0.924C14.2887 0.396 13.8267 0 13.2767 0H9.58075C9.03075 0 8.56875 0.396 8.50275 0.924L8.12875 3.3C7.49075 3.564 6.91875 3.938 6.36875 4.356L6.41275 4.29L4.16875 3.432C3.66275 3.234 3.09075 3.432 2.82675 3.916L0.978749 7.128C0.714749 7.59 0.824748 8.206 1.24275 8.536L3.11275 10.032L3.15675 9.966C3.11275 10.296 3.04675 10.648 3.04675 11C3.04675 11.352 3.11275 11.704 3.15675 12.056L3.11275 11.99L1.24275 13.486C0.824748 13.816 0.714749 14.432 0.978749 14.894L2.82675 18.106C3.09075 18.568 3.66275 18.788 4.16875 18.59L6.39075 17.732L6.36875 17.644C6.91875 18.062 7.49075 18.436 8.12875 18.7L8.50275 21.054C8.56875 21.604 9.03075 22 9.58075 22H13.2767C13.8267 22 14.2887 21.604 14.3547 21.076L14.7287 18.7ZM7.02875 11C7.02875 8.58 9.00875 6.6 11.4287 6.6C13.8487 6.6 15.8287 8.58 15.8287 11C15.8287 13.42 13.8487 15.4 11.4287 15.4C9.00875 15.4 7.02875 13.42 7.02875 11Z" fill="#C4C4C4"/>
      </svg>
      
      <!-- Close/Minimize icon with state management -->
      <button 
        class="control-button close-button" 
        @click="handleCloseClick"
        @mousedown="isClosePressed = true"
        @mouseup="isClosePressed = false"
        @mouseenter="isCloseHovered = true"
        @mouseleave="handleMouseLeave"
        aria-label="Close"
      >
        <img 
          :src="closeButtonImage" 
          alt="Close" 
          class="icon-image"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import settingIcon from '@/assets/setting.png'
import closeButtonNormal from '@/assets/closeButton.png'
import closeButtonHovered from '@/assets/closeButtonHovered.png'
import closeButtonClicked from '@/assets/closeButtonClicked.png'

interface Props {
  username?: string
  clinicName?: string
}

withDefaults(defineProps<Props>(), {
  username: 'Vibrant IT3',
  clinicName: 'Clinic 3333'
})

const emit = defineEmits<{
  'settings-click': []
  'close-click': []
}>()

// State for close button interactions
const isClosePressed = ref(false)
const isCloseHovered = ref(false)

// Computed property for close button image based on state
const closeButtonImage = computed(() => {
  if (isClosePressed.value) {
    return closeButtonClicked
  } else if (isCloseHovered.value) {
    return closeButtonHovered
  } else {
    return closeButtonNormal
  }
})

const handleCloseClick = () => {
  emit('close-click')
}

const handleMouseLeave = () => {
  isCloseHovered.value = false
  isClosePressed.value = false
}
</script>

<style scoped>
.user-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 268px;
  height: auto;
}

.user-info-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}

.info-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  height: 16px;
}

.account-icon,
.clinic-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
}

.info-text {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 1;
  letter-spacing: 2.5%;
  color: #666666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.control-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.control-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s ease;
  width: 22px;
}

.control-button:focus {
  outline: 2px solid #374957;
  outline-offset: 2px;
  border-radius: 2px;
}

.icon-image {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Settings button hover effect */
.settings-button:hover {
  opacity: 0.7;
}

/* Close button uses image states, no additional hover effects needed */
.close-button {
  transition: none;
}
</style>
