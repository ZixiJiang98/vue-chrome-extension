<template>
  <div class="w-full h-full flex flex-col items-center justify-center px-4">
    <div class="w-full max-w-xs flex flex-col items-center gap-6">
      <div class="text-[#333] font-medium text-[24px] leading-[40px] text-center font-['IBM Plex Sans Hebrew',sans-serif]">
        Nice Choice!
      </div>
      <div class="text-[#333] font-normal text-[16px] leading-[24px] text-center tracking-[0.25px] font-['IBM Plex Sans Hebrew',sans-serif]">
        Please connect EHR to your Vibrant account to enjoy the full access to all features. Or watch the tutorial to learn how.
      </div>
      <div class="flex flex-col gap-4 w-full">
        <button
          class="flex justify-center items-center gap-2 w-full rounded-[15px] shadow-[0px_1px_3px_0px_rgba(74,74,74,0.25)] bg-[#004879] py-2"
          @click="goToEnterCredential"
        >
          <span class="text-white text-[20px] font-bold tracking-widest">***</span>
          <span class="text-white font-medium text-[16px] leading-6 font-['IBM Plex Sans Hebrew',sans-serif]">Enter Credential Key</span>
        </button>
        <button
          class="flex justify-center items-center gap-2 w-full rounded-[15px] border border-[#1e4670] shadow-[0px_1px_3px_0px_rgba(74,74,74,0.25)] bg-white py-2"
        >
          <span class="w-6 h-6 flex items-center justify-center">
            <!-- Play icon -->
            <svg viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
              <path d="M8 4V12L15 8L8 4ZM20 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H7V18H15V16H20C21.1 16 22 15.1 22 14V2C22 0.9 21.1 0 20 0ZM20 14H2V2H20V14Z" fill="#374957"/>
            </svg>
          </span>
          <span class="text-[#1e4670] font-normal text-[16px] leading-6 font-['IBM Plex Sans Hebrew',sans-serif]">Watch Tutorial</span>
        </button>
      </div>
      <div class="mt-2">
        <router-link to="/action-popup/skip-page" class="text-[#999] font-medium text-[11px] leading-4 text-center underline cursor-pointer font-['IBM Plex Sans Hebrew',sans-serif] opacity-70">Skip for now</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goToEnterCredential = () => {
  router.push('/enter-credential')
}
</script> 