<template>
  <div class="w-full h-full flex flex-col items-center justify-center px-4">
    <div class="w-full max-w-xs flex flex-col items-center justify-between gap-8">
      <!-- Credential Key Input -->
      <div class="w-full flex flex-col gap-5 items-center justify-center">
        <div class="w-full flex flex-col gap-1">
          <div class="flex flex-row gap-1 items-center h-6">
            <span class="w-6 h-6 flex items-center justify-center">
              <img src="@/assets/password.png" alt="API Icon" class="w-6 h-6 object-contain" />
            </span>
            <span class="text-[#4a4a4a] font-bold text-[14px] font-['Lato',sans-serif]">Enter Credential Key</span>
          </div>
          <div class="relative w-full">
            <input
              class="w-full h-10 rounded border border-[#c9c9c9] bg-white px-3 py-2 text-[#333] text-[16px] font-normal font-['IBM Plex Sans Hebrew',sans-serif] tracking-[0.15px] focus:outline-none focus:border-[#004879]"
              placeholder="ANALQ-12DM-HPLKQ-098-"
              type="text"
            />
          </div>
        </div>
        <!-- Connect Button -->
        <button
          class="w-full flex justify-center items-center gap-1 rounded-[15px] bg-[#004879] shadow-[0px_1px_3px_0px_rgba(74,74,74,0.25)] px-[38px] py-1 text-white text-[14px] font-medium font-['IBM Plex Sans Hebrew',sans-serif] leading-6 tracking-[0.15px]"
        >
          Connect
        </button>
      </div>
      <!-- Help Section -->
      <div class="w-full flex flex-col items-center gap-5 px-2">
        <div class="text-[#333] font-normal text-[14px] leading-[20px] text-center tracking-[0.25px] font-['IBM Plex Sans Hebrew',sans-serif]">
          Have problem connecting?
        </div>
        <button
          class="flex justify-center items-center gap-3 w-full rounded-[15px] border border-[#1e4670] shadow-[0px_1px_3px_0px_rgba(74,74,74,0.25)] bg-white py-1"
        >
          <span class="w-6 h-6 flex items-center justify-center">
            <!-- Play icon -->
            <svg viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="24" height="24" style="width:100%;height:100%;">
              <path d="M8 4V12L15 8L8 4ZM20 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H7V18H15V16H20C21.1 16 22 15.1 22 14V2C22 0.9 21.1 0 20 0ZM20 14H2V2H20V14Z" fill="#374957"/>
            </svg>
          </span>
          <span class="text-[#1e4670] font-normal text-[14px] leading-6 font-['IBM Plex Sans Hebrew',sans-serif]">Watch Tutorial</span>
        </button>
        <div class="mt-2">
          <router-link to="/action-popup/skip-page" class="text-[#999] font-medium text-[11px] leading-4 text-center underline cursor-pointer font-['IBM Plex Sans Hebrew',sans-serif] opacity-70">Skip for now</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No logic required for static design
</script> 