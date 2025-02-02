import ChakraUIVuePlugin, { chakra, extendChakra } from '@chakra-ui/vue-next'
import { domElements } from '@chakra-ui/vue-system'
import { hydrate } from '@emotion/css'

import customTheme from '../theme'

import * as iconSet from '../utils/icons'

const { extendedIcons: extend, ...library } = iconSet

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    ChakraUIVuePlugin,
    extendChakra({
      cssReset: true,
      emotionCacheOptions: {
        key: 'chakra'
      },
      extendTheme: customTheme,
      icons: {
        library,
        extend
      }
    })
  )

  domElements.forEach((tag) => {
    nuxtApp.vueApp.component(`chakra.${tag}`, chakra(tag))
  })

  if (typeof window !== 'undefined') {
    const emotionIds = (window as any).$emotionIds
    hydrate(emotionIds)
  }
})
