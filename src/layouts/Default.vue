<template>
  <div class="w-12/12">
    <header class="header">
      <g-link class="heading-link" :to="{ name: 'home' }">
        <component :is="titleTag" class="heading">{{ config.siteName }}</component>
      </g-link>

      <nav class="mb-6">
        <g-link :to="{ name: 'home' }" style="margin-right: 20px;">Home</g-link>
        <g-link :to="{ name: 'about' }" style="margin-right: 20px;">About</g-link>
      </nav>
    </header>

    <div class="container">
      <slot/>
    </div>
  </div>
</template>

<script>
import config from '~/.temp/config.js'

export default {
  computed: {
    titleTag() {
      return this.$route.name === 'home' ? 'h1' : 'h6'
    },
    config() {
      return config
    }
  }
}
</script>
