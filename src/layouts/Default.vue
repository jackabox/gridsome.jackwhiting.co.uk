<template>
  <div class="w-12/12 flex flex-col">
    <header class="fixed pin-x py-4 bg-white">
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

    <div class="h-full">
      <slot/>
    </div>

    <footer class="container">
      <p
        class="uppercase text-xs mt-20 mb-10 tracking-wide text-grey"
      >&copy; Jack 2019 (and forever)</p>
    </footer>
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
