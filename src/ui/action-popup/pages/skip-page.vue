<template>
  <div class="w-full h-full flex flex-col items-center justify-center px-4">
    <div class="w-full max-w-xs flex flex-col items-center gap-4">
      <div class="w-full flex flex-col items-center">
        <div class="text-[#333] font-medium text-[24px] leading-[40px] text-center font-['IBM Plex Sans Hebrew',sans-serif] w-[244px]">
          Connection provides a better experience.
        </div>
        <div class="text-[#333] font-normal text-[16px] leading-[24px] text-center tracking-[0.25px] font-['IBM Plex Sans Hebrew',sans-serif] w-full mt-2">
          Select a way to synchronize data between EHR and Vibrant. You can switch the method in settings later.
        </div>
      </div>
      <div class="flex flex-col gap-4 items-center justify-center w-full mt-4">
        <div class="w-[140px] flex flex-col gap-4 items-center">
          <button
            class="w-full rounded-[15px] bg-[#004879] shadow-[0px_1px_3px_0px_rgba(74,74,74,0.25)] py-1 flex items-center justify-center px-[43px]"
            @click="goToSelectSync"
          >
            <span class="text-white font-medium text-[14px] leading-6 font-['IBM Plex Sans Hebrew',sans-serif] tracking-[0.15px]">Connect</span>
          </button>
          <button
            class="w-full rounded-[15px] bg-white border border-[#1e4670] shadow-[0px_1px_3px_0px_rgba(74,74,74,0.25)] py-1 flex items-center justify-center relative px-[25px]"
            @click="closePopup"
          >
            <span class="text-[#1e4670] font-normal text-[14px] leading-6 font-['IBM Plex Sans Hebrew',sans-serif] tracking-[0.25px]">Continue Skip</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goToSelectSync = () => {
  router.push('/action-popup/select-sync')
}
const closePopup = () => {
  window.close()
}
</script> 