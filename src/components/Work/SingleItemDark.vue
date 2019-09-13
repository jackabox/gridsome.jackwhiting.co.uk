<template>
  <div>
    <image-swipe-left>
      <g-image :src="image" />
    </image-swipe-left>

    <slide-in :reverse="true" :delay="200" class="pt-4 pb-12 flex flex-col">
      <a
        :href="link"
        target="_blank"
        rel="noopener"
        :title="'Link to website for ' + title"
        class="block"
      >
        <h2 v-html="title" class="mb-0 text-white font-medium leading-loose" />
      </a>

      <p class="mt-2 mb-3 text-grey-100" v-text="description"></p>
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