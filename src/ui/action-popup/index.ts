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

// Save route on every navigation using chrome.storage.local
appRouter.afterEach((to) => {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({ 'vibrant-popup-last-route': to.fullPath })
  }
})

// Delay mounting the app until after store hydration and last route is loaded
async function bootstrap() {
  // Create Pinia and store context before using store
  const app = createApp(App).use(i18n).use(ui).use(pinia)
  // Must install pinia before using store
  app.use(pinia)
  const popupStore = usePopupStore()

  // Await hydration of all relevant state
  await Promise.all([
    popupStore.signedInPromise,
    popupStore.userPromise,
    popupStore.selectedClinicPromise,
  ])

  // Add navigation guard after state is ready
  appRouter.beforeEach((to, from, next) => {
    // If not signed in, always go to welcome-login
    if (!popupStore.signedIn && to.path !== '/welcome-login') {
      return next('/welcome-login')
    }
    // If signed in and navigating to /welcome-login, check for lastRoute
    if (popupStore.signedIn && to.path === '/welcome-login') {
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get('vibrant-popup-last-route', (result) => {
          const lastRoute = result['vibrant-popup-last-route']
          if (
            lastRoute &&
            lastRoute !== '/welcome-login' &&
            lastRoute !== window.location.pathname
          ) {
            return next(lastRoute)
          } else {
            return next()
          }
        })
        return // Wait for async chrome.storage.local
      }
    }
    // If user is logged in but no clinic selected and trying to access main page
    if (popupStore.user.username && !popupStore.selectedClinic && to.path === '/') {
      return next('/select-clinic')
    }
    next()
  })

  // Handle last route restoration before mounting
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get('vibrant-popup-last-route', (result) => {
      const lastRoute = result['vibrant-popup-last-route']
      const mountApp = () => {
        app.use(appRouter)
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
    app.use(appRouter)
    app.mount("#app")
  }
}

bootstrap()

self.onerror = function (message, source, lineno, colno, error) {
  console.info("Error: " + message)
  console.info("Source: " + source)
  console.info("Line: " + lineno)
  console.info("Column: " + colno)
  console.info("Error object: " + error)
}
