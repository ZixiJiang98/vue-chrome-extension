<template>
  <div class="w-full h-full flex flex-col items-center justify-center px-2 py-4">
    <div class="flex flex-col gap-6 items-center w-full">
      <div class="flex flex-col items-center w-full">
        <div class="text-[#333] font-medium text-[28px] leading-[44px] text-center font-['IBM Plex Sans Hebrew',sans-serif] w-[244px]">
          You Are All Set!
        </div>
        <div class="text-[#333] font-normal text-[14px] leading-[20px] text-center tracking-[0.25px] font-['IBM Plex Sans Hebrew',sans-serif] w-[236px]">
          Enjoy our new features.
        </div>
      </div>
      <div class="relative flex items-center justify-center" style="width:114px;height:114px;">
        <!-- Success SVG -->
        <svg class="absolute" fill="none" viewBox="0 0 72 72" width="114" height="114">
          <defs>
            <linearGradient id="finish-gradient" x1="35.7417" x2="35.7417" y1="0" y2="71.3539" gradientUnits="userSpaceOnUse">
              <stop stop-color="#004879" />
              <stop offset="1" stop-color="#8BBDC7" />
            </linearGradient>
          </defs>
          <path d="M31.5915 0.00457517C34.2723 -0.0817187 36.9358 1.06024 38.9197 2.79187L68.6355 32.477C72.5948 36.8147 72.8482 44.2964 66.689 46.6896L6.41079 70.8662C3.08503 72.4972 -0.597772 69.8135 0.0817768 66.1373L24.6924 4.73636C25.7693 1.82825 28.5249 0.102375 31.5915 0.00457517ZM62.367 39.0727L36.6392 12.9141L50.328 43.5945L62.367 39.0698V39.0727ZM30.2641 52.0398L22.9791 32.0254L17.56 45.8381L19.3366 56.1388L30.267 52.0398H30.2641Z" fill="url(#finish-gradient)"/>
        </svg>
      </div>
      <button class="bg-[#004879] rounded-[15px] shadow-[0px_1px_3px_0px_rgba(74,74,74,0.25)] px-[38px] py-1 text-white font-medium text-[14px] leading-6 font-['IBM Plex Sans Hebrew',sans-serif] tracking-[0.15px] mt-2" @click="closePopup">
        Ok.
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
function closePopup() {
  window.close()
}
</script> 