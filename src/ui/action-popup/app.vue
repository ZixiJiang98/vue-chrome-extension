<script setup lang="ts">
import { usePopupStore } from '../../stores/popup.store'
import Login from './pages/login.vue'
import SelectClinic from './pages/select-clinic.vue'

const popupStore = usePopupStore()

// Function to handle clinic selection
const handleClinicSelected = (clinic: string) => {
  popupStore.selectClinic(clinic)
}
</script>

<template>
  <!-- Show login component when not signed in -->
  <Login v-if="!popupStore.signedIn" />
  
  <!-- Show clinic selection when signed in but no clinic selected -->
  <SelectClinic v-else-if="!popupStore.selectedClinic" @clinic-selected="handleClinicSelected" />
  
  <!-- Show main app when signed in and clinic selected -->
  <UApp v-else class="app-container">
    <AppHeader />

    <div class="p-4 prose dark:prose-invert">
      <RouterView />
    </div>

    <AppFooter />
  </UApp>
</template>

<style scoped>
/* Ensure login component takes full space without any margins */
:deep(.login-popup) {
  margin: 0;
  padding: 0;
}

/* Apply same styling as login popup to main app container */
.app-container {
  border-radius: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.25);
  background: #fff;
  background-image: conic-gradient(
    from 43deg at 50% 50%,
    rgb(223, 243, 247) 0deg,
    rgb(255, 250, 241) 180deg,
    rgb(223, 243, 247) 360deg
  );
  width: 260px;
  height: 380px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
}
</style>
