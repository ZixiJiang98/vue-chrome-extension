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
      <button class="control-button settings-button" @click="$emit('settings-click')" aria-label="Settings">
        <img :src="settingIcon" alt="Settings" class="icon-image" />
      </button>
      
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
  align-items: center;
  gap: 161px;
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
