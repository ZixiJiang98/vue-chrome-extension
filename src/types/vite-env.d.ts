/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Put your variables here:

declare const __VERSION__: string
declare const __NAME__: string
declare const __DISPLAY_NAME__: string
declare const __CHANGELOG__: string
declare const __GIT_COMMIT__: string
declare const __GITHUB_URL__: string
