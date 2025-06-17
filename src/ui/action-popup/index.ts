import { i18n } from "src/utils/i18n"
import { pinia } from "src/utils/pinia"
import { appRouter } from "src/utils/router"
import { createApp } from "vue"
import App from "./app.vue"
import ui from "@nuxt/ui/vue-plugin"
import "./index.css"
import { usePopupStore } from "../../stores/popup.store"

// Add routes
appRouter.addRoute({
  path: "/",
  redirect: "/welcome-login",
})

appRouter.addRoute({
  path: "/welcome-login",
  component: () => import("./pages/welcome-login.vue"),
})

appRouter.addRoute({
  path: "/select-clinic",
  component: () => import("./pages/select-clinic.vue"),
})

appRouter.addRoute({
  path: "/select-sync",
  component: () => import("./pages/select-sync.vue"),
})

appRouter.addRoute({
  path: "/connect-ehr",
  component: () => import("./pages/connect-ehr.vue"),
})

appRouter.addRoute({
  path: "/enter-credential",
  component: () => import("./pages/enter-credential.vue"),
})

// Add navigation guard
appRouter.beforeEach((to, from, next) => {
  const popupStore = usePopupStore()
  
  // If user is not logged in and trying to access protected routes
  if (!popupStore.user.username && to.path !== '/welcome-login') {
    return next('/welcome-login')
  }
  
  // If user is logged in but no clinic selected and trying to access main page
  if (popupStore.user.username && !popupStore.selectedClinic && to.path === '/') {
    return next('/select-clinic')
  }
  
  next()
})

// Save route on every navigation using chrome.storage.local
appRouter.afterEach((to) => {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({ 'vibrant-popup-last-route': to.fullPath })
  }
})

// Delay mounting the app until after last route is loaded and (if needed) restored
if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
  chrome.storage.local.get('vibrant-popup-last-route', (result) => {
    const lastRoute = result['vibrant-popup-last-route']
    const mountApp = () => {
      const app = createApp(App).use(i18n).use(ui).use(pinia).use(appRouter)
      app.mount("#app")
    }
    if (
      lastRoute &&
      lastRoute !== window.location.pathname &&
      lastRoute !== '/welcome-login'
    ) {
      appRouter.replace(lastRoute).finally(mountApp)
    } else {
      mountApp()
    }
  })
} else {
  // Fallback: mount immediately if chrome.storage.local is not available
  const app = createApp(App).use(i18n).use(ui).use(pinia).use(appRouter)
  app.mount("#app")
}

export default app

self.onerror = function (message, source, lineno, colno, error) {
  console.info("Error: " + message)
  console.info("Source: " + source)
  console.info("Line: " + lineno)
  console.info("Column: " + colno)
  console.info("Error object: " + error)
}
