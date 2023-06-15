import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/72cy-0101-01-0017/Desktop/github/nuxt3-app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}