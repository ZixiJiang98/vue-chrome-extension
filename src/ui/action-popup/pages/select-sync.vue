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
        <Button
          class="credential-button"
          type="round"
          color-type="dark-blue"
          @click="handleSyncWebsite"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M12.5 4V1L8.5 5L12.5 9V6C15.81 6 18.5 8.69 18.5 12C18.5 13.01 18.25 13.97 17.8 14.8L19.26 16.26C20.04 15.03 20.5 13.57 20.5 12C20.5 7.58 16.92 4 12.5 4ZM12.5 18C9.19 18 6.5 15.31 6.5 12C6.5 10.99 6.75 10.03 7.2 9.2L5.74 7.74C4.96 8.97 4.5 10.43 4.5 12C4.5 16.42 8.08 20 12.5 20V23L16.5 19L12.5 15V18Z" fill="white"/>
        </svg>
          Sync via Website
        </Button>
        <Button
          class="credential-button"
          type="round"
          color-type="dark-blue-stroke"
          @click="goToEnterCredential"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M2.5 16H22.5V18H2.5V16ZM3.65 11.95L4.5 10.47L5.35 11.95L6.65 11.2L5.8 9.72H7.5V8.22H5.8L6.65 6.75L5.35 6L4.5 7.47L3.65 6L2.35 6.75L3.2 8.22H1.5V9.72H3.2L2.35 11.2L3.65 11.95ZM10.35 11.2L11.65 11.95L12.5 10.47L13.35 11.95L14.65 11.2L13.8 9.72H15.5V8.22H13.8L14.65 6.75L13.35 6L12.5 7.47L11.65 6L10.35 6.75L11.2 8.22H9.5V9.72H11.2L10.35 11.2ZM23.5 8.22H21.8L22.65 6.75L21.35 6L20.5 7.47L19.65 6L18.35 6.75L19.2 8.22H17.5V9.72H19.2L18.35 11.2L19.65 11.95L20.5 10.47L21.35 11.95L22.65 11.2L21.8 9.72H23.5V8.22Z" fill="#374957"/>
          </svg>
          Sync via API
        </Button>
        <div>
          <router-link to="/action-popup/skip-page" class="skip-for-now-button">Skip for now</router-link>
        </div>
      </div>
    </div>
    <Syncing v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
import Button from '../../../NewLibrary/Button.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Syncing from '../../common/syncing.vue'

const isLoading = ref(false)
const router = useRouter()

const goToEnterCredential = () => {
  router.push('/connect-ehr')
}

function handleSyncWebsite() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    router.push('/action-popup/sync-finish')
  }, 1000)
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