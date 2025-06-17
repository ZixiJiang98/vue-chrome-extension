<script setup lang="ts">
import { usePopupStore } from '../../../stores/popup.store'
import { useRouter } from 'vue-router'
import { watchEffect } from 'vue'

const popupStore = usePopupStore()
const router = useRouter()

// Watch for signedIn state changes and redirect accordingly
watchEffect(() => {
  if (!popupStore.signedIn) {
    router.push('/action-popup/welcome-login')
  }
})

const handleSignOut = () => {
  popupStore.signOut()
  router.push('/action-popup/welcome-login')
}
</script>

<template>
  <div class="main-content">
    <div class="content">
      <p>Welcome to the main application!</p>
      <p>User: {{ popupStore.user.username }}</p>
      <button class="sign-out-btn" @click="handleSignOut">
        Sign Out
      </button>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h2 {
  margin: 0;
  color: #333333;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
}

.sign-out-btn {
  padding: 8px 16px;
  background: #1E4670;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
}

.sign-out-btn:hover {
  background: #163a5f;
}

.content {
  flex: 1;
  color: #333333;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
}
</style>
