<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="sync-section-container">
      <div class="title-text">
        Great Job!
      </div>
      <div class="subtitle-text">
        Select a way to synchronize data between EHR and Vibrant. You can switch the method in settings later.
      </div>
      <div class="buttons-container">
        <!-- <button
          class="flex justify-center items-center gap-3 self-stretch rounded-[15px] shadow-[0px_1px_3px_0px_rgba(74,74,74,0.25)]"
          style="padding:4px 19px; background:var(--VibrantDarkBlue, #004879);"
        >
          <span class="w-6 h-6 flex items-center justify-center">
            <img src="@/assets/icons/syncIcon.png" alt="Sync Icon" class="w-6 h-6 object-contain" />
          </span>
          <span class="text-white font-medium text-[14px] leading-6 font-['IBM Plex Sans Hebrew',sans-serif]">Sync via Website</span>
        </button> -->
        <Button
          type="round"
          color-type="dark-blue"
          @click="goToEnterCredential"
        >
          Sync via Website
        </Button>
        <!-- <button
          class="flex justify-center items-center gap-3 self-stretch rounded-[15px] shadow-[0px_1px_3px_0px_rgba(74,74,74,0.25)] border"
          style="padding:4px 38px; border:1px solid #1E4670; background:#FFF;"
          @click="goToEnterCredential"
        >
          <span class="w-6 h-6 flex items-center justify-center">
            <img src="@/assets/icons/apiIcon.png" alt="API Icon" class="w-6 h-6 object-contain" />
          </span>
          <span class="text-[#1e4670] font-normal text-[14px] leading-6 font-['IBM Plex Sans Hebrew',sans-serif]">Sync via API</span>
        </button> -->
        <Button
          type="round"
          color-type="dark-blue-stroke"
          @click="goToEnterCredential"
        >
          Sync via Website
        </Button>
        <div>
          <a class="skip-for-now-button">Skip for now</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from '../../../NewLibrary/Button.vue'
const router = useRouter()
const goToEnterCredential = () => {
  router.push('/enter-credential')
}
</script>

<!-- No custom styles needed, all handled by Tailwind and inline style for the primary and secondary button -->
 <style scoped>
 .sync-section-container {
  width: 236px;
  height: 276px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 24px;
  margin-bottom: 24px;  
 }

 .title-text {
  color: var(--TrueBlack, #333);
  text-align: center;

  /* Web_XSDisplay_28 */
  font-family: "IBM Plex Sans Hebrew";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px; /* 157.143% */
 }

 .subtitle-text  {
  color: var(--TrueBlack, #333);
  text-align: center;

  /* Mobile_LargeBody_16 */
  font-family: "IBM Plex Sans Hebrew";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.25px;
  margin-top: 8px;
 }

 .buttons-container {
  gap: 18px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
 }

 .skip-for-now-button {
  color: var(--TrueBlack, #333);
  text-align: center;

  /* Mobile_LargeBody_16 */
  font-family: "IBM Plex Sans Hebrew";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.25px;
  margin-top: 8px;
  text-decoration: underline;
  cursor: pointer;
 }

 .skip-for-now-button {
  color: var(--ContentMediumGrey, #999);
  text-align: center;

  /* Web_SmallLable_11 */
  font-family: "IBM Plex Sans Hebrew";
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 145.455% */
  letter-spacing: 0.5px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
}
</style>