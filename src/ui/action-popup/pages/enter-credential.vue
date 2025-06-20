<template>
  <div class="">
    <div class="sync-section-container">
      <!-- Credential Key Input -->
      <div class="credential-key-container">
        <div class="">
          <div class="input-title">
            <span class="w-6 h-6 flex items-center justify-center">
              <!-- API Icon -->
              <svg style="width: 24px; height: 24px;" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 10H21V12H1V10ZM2.15 5.95L3 4.47L3.85 5.95L5.15 5.2L4.3 3.72H6V2.22H4.3L5.15 0.75L3.85 0L3 1.47L2.15 0L0.85 0.75L1.7 2.22H0V3.72H1.7L0.85 5.2L2.15 5.95ZM8.85 5.2L10.15 5.95L11 4.47L11.85 5.95L13.15 5.2L12.3 3.72H14V2.22H12.3L13.15 0.75L11.85 0L11 1.47L10.15 0L8.85 0.75L9.7 2.22H8V3.72H9.7L8.85 5.2ZM22 2.22H20.3L21.15 0.75L19.85 0L19 1.47L18.15 0L16.85 0.75L17.7 2.22H16V3.72H17.7L16.85 5.2L18.15 5.95L19 4.47L19.85 5.95L21.15 5.2L20.3 3.72H22V2.22Z" fill="#374957"/>
              </svg>
            </span>
            <span class="enter-credential-key-text">Enter Credential Key</span>
          </div>
          <!-- <div class="relative w-full">
            <input
              class="w-full h-10 rounded border border-[#c9c9c9] bg-white px-3 py-2 text-[#333] text-[16px] font-normal font-['IBM Plex Sans Hebrew',sans-serif] tracking-[0.15px] focus:outline-none focus:border-[#004879]"
              placeholder="ANALQ-12DM-HPLKQ-098-"
              type="text"
            />
          </div> -->
          <Input
            placeholder="ANALQ-12DM-HPLKQ-098-"
          />
        </div>
        <!-- Connect Button -->
        <!-- <button
          class="w-full flex justify-center items-center gap-1 rounded-[15px] bg-[#004879] shadow-[0px_1px_3px_0px_rgba(74,74,74,0.25)] px-[38px] py-1 text-white text-[14px] font-medium font-['IBM Plex Sans Hebrew',sans-serif] leading-6 tracking-[0.15px]"
          @click="handleConnect"
        >
          Connect
        </button> -->
        <Button
          type="round"
          color-type="dark-blue"
          style="cursor: pointer;"
          @click="handleConnect"
        >
          Connect
        </Button>
      </div>
      <!-- Help Section -->
      <div class="help-section-container">
        <div class="help-section-wrapper">
          <span class="have-problem-connecting-text">Have problem connecting?</span>
          <!-- <button
            class="w-full flex items-center justify-center gap-3 rounded-[15px] bg-white border border-[#1e4670] shadow-[0px_1px_3px_0px_rgba(74,74,74,0.25)] px-[38px] py-1"
          >
            <span class="w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                <path d="M8 4V12L15 8L8 4ZM20 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H7V18H15V16H20C21.1 16 22 15.1 22 14V2C22 0.9 21.1 0 20 0ZM20 14H2V2H20V14Z" fill="#374957"/>
              </svg>
            </span>
            <span class="text-[#1e4670] text-[14px] font-normal font-['IBM Plex Sans Hebrew',sans-serif] leading-6 tracking-[0.25px]">Watch Tutorial</span>
          </button> -->

          <Button
            type="round"
            color-type="dark-blue-stroke"
            class="watch-tutorial-button"
            style="cursor: pointer;"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M9.5 7V15L16.5 11L9.5 7ZM21.5 3H3.5C2.4 3 1.5 3.9 1.5 5V17C1.5 18.1 2.4 19 3.5 19H8.5V21H16.5V19H21.5C22.6 19 23.5 18.1 23.5 17V5C23.5 3.9 22.6 3 21.5 3ZM21.5 17H3.5V5H21.5V17Z" fill="#374957"/>
          </svg>
            Watch Tutorial
          </Button>
        </div>
        <div>
          <router-link to="/action-popup/skip-page" class="skip-for-now-button">Skip for now</router-link>
        </div>
      </div>
    </div>
    <Syncing v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
// No logic required for static design
import Button from '../../../NewLibrary/Button.vue'
import Input from '../../../NewLibrary/Input.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Syncing from '../../common/syncing.vue'

const isLoading = ref(false)
const router = useRouter()

function handleConnect() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    router.push('/action-popup/sync-finish')
  }, 1000)
}
</script> 

<style scoped>
 .sync-section-container {
  width: 236px;
  height: 276px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 24px;
  margin-bottom: 24px;  
 }

 .credential-key-container {
  width: 236px;
  height: 178px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  flex: 1 0 0;
  align-self: stretch;
 }

 .enter-credential-key-text {
  color: var(--color-Grey-Grey-4A, #4A4A4A);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
 }

 .have-problem-connecting-text {
  color: var(--TrueBlack, #333);
  text-align: center;

  /* Mobile_MediumBody_14 */
  font-family: "IBM Plex Sans Hebrew";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.25px;
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

 .input-title {
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: var(--color-Grey-Grey-4A, #4A4A4A);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  align-items: center;
 }

 .help-section-container{
  height: 98px;
  gap: 20px;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }

 .help-section-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
 }

 .watch-tutorial-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  width: 100%;
  cursor: pointer;
  width: 220px;
  align-items: center;
 }
</style>
