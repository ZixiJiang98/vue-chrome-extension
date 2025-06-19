<script setup lang="ts">
import VibrantLogo from "../common/VibrantLogo.vue"
import UserHeader from "../common/UserHeader.vue"
import Setting from '../common/setting.vue'
import { usePopupStore } from "../../stores/popup.store"
import { useRouter } from 'vue-router'
import { onMounted, ref, watch } from 'vue'

const popupStore = usePopupStore()
const router = useRouter()

const showSettings = ref(false)
const localUsername = ref('')

const handleSettings = () => {
  showSettings.value = true
}

const handleClose = () => {
  // Close the popup window
  window.close()
}

function handleSwitchAccount() {
  popupStore.signOut()
  showSettings.value = false
  router.push('/welcome-login')
}

function handleSwitchClinic() {
  showSettings.value = false
  router.push('/select-clinic')
}

function handleSwitchSync() {
  showSettings.value = false
  router.push('/select-sync')
}

onMounted(() => {
  // If user is logged in but no clinic is selected, redirect to select-clinic
  if (popupStore.user.username && !popupStore.selectedClinic) {
    router.push('/select-clinic')
  }
  // Initialize localUsername if already signed in
  if (popupStore.user.username) {
    localUsername.value = popupStore.user.username
  }
})

watch(() => popupStore.user.username, (newVal) => {
  if (newVal) {
    localUsername.value = newVal
  }
})
</script>

<template>
  <div class="popup-container">
    <!-- User Header at the top -->
    <div class="header-container">
      <UserHeader 
        :username="localUsername || 'Vibrant IT3'"
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

    <!-- Settings overlay -->
    <Setting
      v-if="showSettings"
      @close="showSettings = false"
      @switch-account="handleSwitchAccount"
      @switch-clinic="handleSwitchClinic"
      @switch-sync="handleSwitchSync"
      :can-switch-sync="Boolean(popupStore.signedIn && popupStore.selectedClinic)"
    />

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
