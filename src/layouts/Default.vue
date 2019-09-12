<template>
  <div class="w-12/12 flex flex-col">
    <header class="fixed pin-x py-4 bg-white z-10">
      <div class="container flex items-center justify-between">
        <g-link
          class="heading-link text-black hover:text-site"
          :to="{ name: 'home' }"
          title="Link to home page"
        >
          <h1 class="text-base font-bold uppercase mb-0 mt-0 tracking-wide">{{ config.siteName }}</h1>
        </g-link>

        <nav>
          <g-link
            :to="{ name: 'works' }"
            class="ml-5 tracking-wide text-base text-grey-darker hover:text-black"
            title="View all works"
          >Works</g-link>
          <g-link
            :to="{ name: 'posts' }"
            class="ml-5 md:ml-7 tracking-wide text-base text-grey-darker hover:text-black"
            title="View all posts"
          >Posts</g-link>
          <g-link
            :to="{ name: 'contact' }"
            class="ml-5 md:ml-7 tracking-wide text-base text-site hover:text-site-darker"
            title="Contact Me"
          >Get In Touch</g-link>
        </nav>
      </div>
    </header>

    <div class="h-full">
      <slot />
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
