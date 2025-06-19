<template>
  <div class="w-full h-full flex flex-col items-center justify-center px-4">
    <div class="sync-section-container">
      <div class="title-text">
        Connection provides a better experience.
      </div>
      <div class="subtitle-text">
        Select a way to synchronize data between EHR and Vibrant. You can switch the method in settings later.
      </div>
      <div class="buttons-container">
        <Button
          class="credential-button"
          type="round"
          color-type="dark-blue"
          style="cursor: pointer;"
          @click="goToSelectSync"
        >
          Connect
        </Button>
        <Button
          class="credential-button"
          type="round"
          color-type="dark-blue-stroke"
          style="cursor: pointer;"
          @click="closePopup"
        >
          Continue Skip
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../../../NewLibrary/Button.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const goToSelectSync = () => {
  router.push('/action-popup/select-sync')
}
const closePopup = () => {
  window.close()
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
  display: flex;
  width: 244px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  color: var(--TrueBlack, #333);
  text-align: center;

  /* Mobile_XSDisplay_24 */
  font-family: "IBM Plex Sans Hebrew";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 166.667% */
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
 width: 160px;
 cursor: pointer;
}

</style>