<script setup lang="ts">
import VibrantLogo from "../common/VibrantLogo.vue"
import UserHeader from "../common/UserHeader.vue"
import { usePopupStore } from "../../stores/popup.store"
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const popupStore = usePopupStore()
const router = useRouter()

const handleSettings = () => {
  // TODO: Implement settings functionality
  console.log('Settings clicked from header')
}

const handleClose = () => {
  // Close the popup window
  window.close()
}

onMounted(() => {
  // If user is logged in but no clinic is selected, redirect to select-clinic
  if (popupStore.user.username && !popupStore.selectedClinic) {
    router.push('/select-clinic')
  }
})
</script>

<template>
  <div class="popup-container">
    <!-- User Header at the top -->
    <div class="header-container">
      <UserHeader 
        :username="popupStore.user.username || 'Vibrant IT3'"
        :clinic-name="popupStore.selectedClinic || 'Clinic 3333'"
        @settings-click="handleSettings"
        @close-click="handleClose"
      />
    </div>

    <!-- Main app content -->
    <UApp class="app-container">
      <div>
        <RouterView />
      </div>
    </UApp>

    <!-- VibrantLogo positioned at bottom center -->
    <div class="logo-container">
      <VibrantLogo />
    </div>
  </div>
</template>

<style scoped>
.popup-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 16px;
}

.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.logo-container {
  position: absolute;
  bottom: 42px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
</style>
