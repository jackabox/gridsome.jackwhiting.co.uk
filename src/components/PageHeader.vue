<template>
  <slide-in :delay="0" class="bg-pink-lighter pt-30 lg:pt-40 pb-6 lg:pb-10 mb-10 lg:mb-20 z-0">
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="mt-3 mb-10 text-md tracking-wide uppercase" v-if="date">{{ date }}</div>
    </div>
  </slide-in>
</template>

<script>
import SlideIn from '~/components/Animation/SlideIn'

export default {
  props: ['title', 'date'],

  components: {
    SlideIn
  }
}
</script>

