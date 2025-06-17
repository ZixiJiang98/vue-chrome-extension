<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="w-full max-w-xs flex flex-col items-center gap-6">
      <div class="text-[#333] font-medium text-[28px] leading-[44px] text-center font-['IBM Plex Sans Hebrew',sans-serif]">
        Great Job!
      </div>
      <div class="text-[#333] font-normal text-[16px] leading-[24px] text-center tracking-[0.25px] font-['IBM Plex Sans Hebrew',sans-serif]">
        Select a way to synchronize data between EHR and Vibrant. You can switch the method in settings later.
      </div>
      <div class="flex flex-col gap-[18px] w-[200px]">
        <button
          class="flex justify-center items-center gap-3 self-stretch rounded-[15px] shadow-[0px_1px_3px_0px_rgba(74,74,74,0.25)]"
          style="padding:4px 19px; background:var(--VibrantDarkBlue, #004879);"
        >
          <span class="w-6 h-6 flex items-center justify-center">
            <img src="@/assets/icons/syncIcon.png" alt="Sync Icon" class="w-6 h-6 object-contain" />
          </span>
          <span class="text-white font-medium text-[14px] leading-6 font-['IBM Plex Sans Hebrew',sans-serif]">Sync via Website</span>
        </button>
        <button
          class="flex justify-center items-center gap-3 self-stretch rounded-[15px] shadow-[0px_1px_3px_0px_rgba(74,74,74,0.25)] border"
          style="padding:4px 38px; border:1px solid #1E4670; background:#FFF;"
          @click="goToEnterCredential"
        >
          <span class="w-6 h-6 flex items-center justify-center">
            <img src="@/assets/icons/apiIcon.png" alt="API Icon" class="w-6 h-6 object-contain" />
          </span>
          <span class="text-[#1e4670] font-normal text-[14px] leading-6 font-['IBM Plex Sans Hebrew',sans-serif]">Sync via API</span>
        </button>
      </div>
      <div class="mt-2">
        <a href="#" class="text-[#999] font-medium text-[11px] leading-4 text-center underline cursor-pointer font-['IBM Plex Sans Hebrew',sans-serif]">Skip for now</a>
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

<!-- No custom styles needed, all handled by Tailwind and inline style for the primary and secondary button -->