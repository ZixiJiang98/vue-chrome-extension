<template>
  <div class="settings-content">
    <div class="settings-actions">
      <button class="settings-action" @click="$emit('switch-account')">Switch Account</button>
      <button class="settings-action" @click="$emit('switch-clinic')">Switch Clinic</button>
      <button class="settings-action" @click="$emit('switch-sync')" :disabled="!canSwitchSync">Switch Sync Method</button>
      <button class="settings-action" @click="$emit('feedback')">Write a Feedback</button>
    </div>
    <button class="settings-back" @click="$emit('close')">
      <span class="back-icon">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5.25H2.8725L7.065 1.0575L6 0L0 6L6 12L7.0575 10.9425L2.8725 6.75H12V5.25Z" fill="white"/>
        </svg>
      </span>
      <span class="back-text">Back</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
defineEmits(['close', 'switch-account', 'switch-clinic', 'switch-sync', 'feedback'])
const props = defineProps<{ canSwitchSync: boolean }>()
</script>

<style scoped>
.settings-content {
  border-radius: 0px 0px 5px 5px;
  opacity: 0.9;
  background: var(--StringTestAreaTextColor, #333);
  box-shadow: 0px 2px 4px 0px rgba(74, 74, 74, 0.25);
  display: flex;
  padding: 4px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  min-width: 220px;
  min-height: 120px;
  position: absolute;
  top: 48px;
  right: 16px;
  z-index: 1000;
}
.settings-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: center;
}
.settings-action {
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 0;
  width: 100%;
  text-align: center;
  border-radius: 4px;
  transition: background 0.15s;
  text-decoration: underline;
}
.settings-action:hover {
  background: rgba(255,255,255,0.08);
}
.settings-action:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.settings-back {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'IBM Plex Sans Hebrew', sans-serif;
  font-weight: 500;
  font-size: 11px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
  text-decoration: underline;
  text-underline-position: from-font;
  border-radius: 4px;
  transition: background 0.15s;
  width: 100%;
  text-align: center;
  justify-content: center;
}
.settings-back:hover {
  background: rgba(255,255,255,0.08);
}
.back-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
}
.back-text {
  font-family: IBM Plex Sans Hebrew, sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 0;
  text-align: center;
  border-radius: 4px;
  transition: background .15s;
  text-decoration: underline;
}
</style> 