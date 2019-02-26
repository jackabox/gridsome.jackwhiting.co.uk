<template>
  <div class="w-12/12">
    <header class="fixed pin-x py-2 bg-white">
      <div class="container flex items-center justify-between">
        <g-link class="heading-link" :to="{ name: 'home' }">
          <h1
            class="text-base uppercase mb-0 mt-0 text-grey-darker hover:text-black tracking-wide"
          >{{ config.siteName }}</h1>
        </g-link>

        <nav>
          <g-link :to="{ name: 'home' }" class="ml-4 tracking-wide text-base text-grey-darker">Home</g-link>
          <g-link
            :to="{ name: 'posts' }"
            class="ml-4 tracking-wide text-base text-grey-darker"
          >About</g-link>
        </nav>
      </div>
    </header>

    <div>
      <slot/>
    </div>
  </div>
</template>

<script>
import config from '~/.temp/config.js'

export default {
  computed: {
    config() {
      return config
    }
  }
}
</script>
