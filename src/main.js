// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/css/main.css'
;(function(f, a, t, h, o, m) {
  a[h] =
    a[h] ||
    function() {
      ;(a[h].q = a[h].q || []).push(arguments)
    }
  ;(o = f.createElement('script')), (m = f.getElementsByTagName('script')[0])
  o.async = 1
  o.src = t
  o.id = 'fathom-script'
  m.parentNode.insertBefore(o, m)
})(document, window, '//analytics.jackwhiting.co.uk/tracker.js', 'fathom')
fathom('set', 'siteId', 'HGJIL')

export default function(Vue, { router, head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta = [
    { charset: 'utf-8' },
    { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ...head.meta
  ]

  head.bodyAttrs = {
    ...head.bodyAttrs,
    class: 'flex min-h-screen text-black text-base leading-normal font-sans'
  }

  router.afterEach((to, from) => {
    /*
     ** We tell Google Analytics to add a `pageview`
     */
    // ga('set', 'page', to.fullPath)
    fathom('trackPageview', to.fullPath)
  })
}
