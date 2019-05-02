<template>
  <div class="w-12/12 flex flex-col">
    <header class="fixed pin-x py-4 bg-white z-10">
      <div class="container flex items-center justify-between">
        <g-link class="heading-link" :to="{ name: 'home' }" title="Link to home page">
          <h1
            class="text-base uppercase mb-0 mt-0 text-grey-darker hover:text-black tracking-wide"
          >{{ config.siteName }}</h1>
        </g-link>

        <nav>
          <g-link
            :to="{ name: 'posts' }"
            class="ml-5 tracking-wide text-base text-grey-darker"
            title="View all posts"
          >Posts</g-link>
          <g-link
            :to="{ name: 'works' }"
            class="ml-5 tracking-wide text-base text-grey-darker"
            title="View all works"
          >Works</g-link>

          <a
            href="mailto:hi@jackwhiting.co.uk"
            title="Get in touch with Jack"
            class="border border-2 border-pink inline-flex pb-1 text-sm hover:text-black hover:bg-pink px-2 py-1 ml-5 tracking-wide text-grey-darker"
          >Get In Touch</a>
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
