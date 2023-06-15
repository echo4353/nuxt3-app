import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/72cy-0101-01-0017/Desktop/github/nuxt3-app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}