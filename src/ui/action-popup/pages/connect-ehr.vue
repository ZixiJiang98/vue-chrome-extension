<template>
  <div class="w-full h-full flex flex-col items-center justify-center px-4">
    <div class="sync-section-container">
      <div class="title-text">
        Nice Choice!
      </div>
      <div class="subtitle-text">
        Please connect EHR to your Vibrant account to enjoy the full access to all features. Or watch the tutorial to learn how.
      </div>
      <div class="buttons-container">
        <Button
          type="round"
          color-type="dark-blue"
          style="cursor: pointer; align-items: center; display: flex; gap:12px; width: 240px; justify-content: center;"
          @click="goToEnterCredential"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M2.5 16H22.5V18H2.5V16ZM3.65 11.95L4.5 10.47L5.35 11.95L6.65 11.2L5.8 9.72H7.5V8.22H5.8L6.65 6.75L5.35 6L4.5 7.47L3.65 6L2.35 6.75L3.2 8.22H1.5V9.72H3.2L2.35 11.2L3.65 11.95ZM10.35 11.2L11.65 11.95L12.5 10.47L13.35 11.95L14.65 11.2L13.8 9.72H15.5V8.22H13.8L14.65 6.75L13.35 6L12.5 7.47L11.65 6L10.35 6.75L11.2 8.22H9.5V9.72H11.2L10.35 11.2ZM23.5 8.22H21.8L22.65 6.75L21.35 6L20.5 7.47L19.65 6L18.35 6.75L19.2 8.22H17.5V9.72H19.2L18.35 11.2L19.65 11.95L20.5 10.47L21.35 11.95L22.65 11.2L21.8 9.72H23.5V8.22Z" fill="white"/>
          </svg>
          <span class="text-white font-medium text-[16px] leading-6 font-['IBM Plex Sans Hebrew',sans-serif]">Enter Credential Key</span>
        </Button>
        <Button
          type="round"
          color-type="dark-blue-stroke"
          class="watch-tutorial-button"
          style="cursor: pointer; align-items: center; display: flex; gap:12px; width: 240px; justify-content: center;"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M9.5 7V15L16.5 11L9.5 7ZM21.5 3H3.5C2.4 3 1.5 3.9 1.5 5V17C1.5 18.1 2.4 19 3.5 19H8.5V21H16.5V19H21.5C22.6 19 23.5 18.1 23.5 17V5C23.5 3.9 22.6 3 21.5 3ZM21.5 17H3.5V5H21.5V17Z" fill="#374957"/>
          </svg>
          Watch Tutorial
        </Button>
        <div>
          <router-link to="/action-popup/skip-page" class="skip-for-now-button">Skip for now</router-link>
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

.credential-button {
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 12px;
 width: 100%;
 cursor: pointer;
}

</style>
