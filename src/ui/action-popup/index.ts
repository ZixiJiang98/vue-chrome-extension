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

const app = createApp(App).use(i18n).use(ui).use(pinia).use(appRouter)

app.mount("#app")

export default app

self.onerror = function (message, source, lineno, colno, error) {
  console.info("Error: " + message)
  console.info("Source: " + source)
  console.info("Line: " + lineno)
  console.info("Column: " + colno)
  console.info("Error object: " + error)
}
