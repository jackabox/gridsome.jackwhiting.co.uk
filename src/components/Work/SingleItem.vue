<template>
  <div>
    <image-swipe-left>
      <g-image :src="image" />
    </image-swipe-left>

    <slide-in :reverse="true" :delay="200" class="pt-4 pb-12 flex flex-col">
      <div>
        <span
          class="text-xs tracking-wide uppercase text-grey-darker py-1 px-2 rounded bg-site-lighter mr-3"
          v-for="(item, index) in tags"
          :key="index"
        >{{ item }}</span>
      </div>

      <a
        :href="link"
        target="_blank"
        rel="noopener"
        :title="'Link to website for ' + title"
        class="block mt-2"
      >
        <h2 v-html="title" class="mb-0 text-black font-semibold leading-loose" />
      </a>

      <p class="mt-2 mb-3 text-grey-darker" v-text="description"></p>

      <span class="mt-auto">
        <a
          :href="link"
          target="_blank"
          rel="noopener"
          class="link text-base inline-block"
          :title="'Link to website for ' + title"
        >Visit Site &rarr;</a>
      </span>
    </slide-in>
  </div>
</template>

<script>
import SlideIn from '~/components/Animation/SlideIn'
import ImageSwipeLeft from '~/components/Animation/ImageSwipeLeft'

export default {
  props: ['link', 'title', 'description', 'image', 'tags'],

  components: {
    SlideIn,
    ImageSwipeLeft
  }
}
</script>