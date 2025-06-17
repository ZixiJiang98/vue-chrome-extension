<template>
  <div class="w-full h-full flex flex-col items-center justify-center px-4">
    <div class="w-full max-w-xs flex flex-col items-center justify-between gap-8">
      <!-- Credential Key Input -->
      <div class="w-full flex flex-col gap-5 items-center justify-center">
        <div class="w-full flex flex-col gap-1">
          <div class="flex flex-row gap-1 items-center h-6">
            <span class="w-6 h-6 flex items-center justify-center">
              <!-- API Icon -->
              <svg viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                <path d="M1 10H21V12H1V10ZM2.15 5.95L3 4.47L3.85 5.95L5.15 5.2L4.3 3.72H6V2.22H4.3L5.15 0.75L3.85 0L3 1.47L2.15 0L0.85 0.75L1.7 2.22H0V3.72H1.7L0.85 5.2L2.15 5.95ZM8.85 5.2L10.15 5.95L11 4.47L11.85 5.95L13.15 5.2L12.3 3.72H14V2.22H12.3L13.15 0.75L11.85 0L11 1.47L10.15 0L8.85 0.75L9.7 2.22H8V3.72H9.7L8.85 5.2ZM22 2.22H20.3L21.15 0.75L19.85 0L19 1.47L18.15 0L16.85 0.75L17.7 2.22H16V3.72H17.7L16.85 5.2L18.15 5.95L19 4.47L19.85 5.95L21.15 5.2L20.3 3.72H22V2.22Z" fill="#374957"/>
              </svg>
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
        <div class="w-full flex flex-col gap-2 items-center">
          <span class="text-[#333] text-[14px] font-normal font-['IBM Plex Sans Hebrew',sans-serif] leading-5 tracking-[0.25px] text-center">Have problem connecting?</span>
          <button
            class="w-full flex items-center justify-center gap-3 rounded-[15px] bg-white border border-[#1e4670] shadow-[0px_1px_3px_0px_rgba(74,74,74,0.25)] px-[38px] py-1"
          >
            <span class="w-6 h-6 flex items-center justify-center">
              <!-- Tutorial Icon -->
              <svg viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                <path d="M8 4V12L15 8L8 4ZM20 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H7V18H15V16H20C21.1 16 22 15.1 22 14V2C22 0.9 21.1 0 20 0ZM20 14H2V2H20V14Z" fill="#374957"/>
              </svg>
            </span>
            <span class="text-[#1e4670] text-[14px] font-normal font-['IBM Plex Sans Hebrew',sans-serif] leading-6 tracking-[0.25px]">Watch Tutorial</span>
          </button>
        </div>
        <div class="mt-2">
          <a href="#" class="text-[#999] font-medium text-[11px] leading-4 text-center underline cursor-pointer font-['IBM Plex Sans Hebrew',sans-serif]">Skip for now</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No logic required for static design
</script> 