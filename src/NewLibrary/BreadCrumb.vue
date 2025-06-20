<template>
  <div>
    <ul class="breadcrumb">
      <li v-for="url in urlList" :key="url.urlName">
        <Button
          v-if=" url.urlLink !== currentPath"
          color-type="none-stroke"
          :large-font="true"
          class="justify-self-start"
        >
          <router-link 
            :to="url.urlLink"
            >
            {{ url.urlName }}
          </router-link>
        </Button>
        <p v-else class="active">
          {{ url.urlName }}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    urlList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    currentPath() {
      return this.$router.currentRoute.value.path
    }
  }
}


</script>
<style scoped>
ul.breadcrumb {
  display: flex;
  flex-direction: row;
  list-style: none;
}

ul.breadcrumb li {
  display:flex;
  flex-direction: row;
  align-items: center;
}

ul.breadcrumb li+li:before {
  content: '';
  display: inline-block;
  margin: 0 9px;
  width: 18px;
  height: 18px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.8675 15.5975L6.2025 16.925L13.62 9.5L6.195 2.075L4.8675 3.4025L10.965 9.5L4.8675 15.5975Z" fill="black" fill-opacity="0.87"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.active  {
  color: #1E4670;
  font-family: "IBM Plex Sans Hebrew";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.515px;
  text-decoration: none !important;
}

.non-active  {
  text-decoration: underline;
}

</style>