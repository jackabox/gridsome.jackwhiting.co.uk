<template>
  <tiny-slider
    :mouse-drag="true"
    :loop="true"
    items="1"
    mode="gallery"
    :controls="false"
    :autoplay-timeout="9000"
    :autoplay="true"
    :autoplay-button="false"
    :autoplay-hover-pause="true"
  >
    <div v-for="(item, index) in testimonials" :key="index" class="w-12/12">
      <p class="text-xl opacity-75" v-text="item.content" />
      <p class="font-medium italic">&mdash; {{ item.client }}</p>
    </div>
  </tiny-slider>
</template>

<script>
import '~/assets/css/tiny-slider.css'

export default {
  components: {
    TinySlider: () => import('vue-tiny-slider')
  },

  data() {
    return {
      testimonials: [
        {
          client: 'Brian Pensinger, Senior Marketing Specialist',
          content:
            'Jack has been a great find for myself and my company. He is very prompt on responses and delivery of his services. That would be outstanding alone, but he also is great at what he does. The quality of his work is top notch and I hope if everyone I work with in the future is as talented and passionate as him.'
        },
        {
          client: 'Mandeep Khunkhuna, Assistant Digital Marketing Manager',
          content:
            'Jack is a very knowledgeable developer and was always available to lend a helping hand when needed. He is extremely passionate about his work and this can be shown through the work he produces. Very talented and a pleasure to work with.'
        },
        {
          client: 'Anne Williams, Virtual Assistant at LinchpinPA',
          content:
            'I  would have no doubt whatsoever in recommending Jack for website design. He has an incredibly quick mind, is very knowledgeable about the web, and I have been delighted with his work. So much so that he now hosts my site as well, and I know that he is constantly tweaking at things so I am confident in the fact that everything is working as it should.'
        },
        {
          client: 'Harry Vann, Digital Support Executive',
          content:
            'Jack is a well organised, thorough and superb Client to work with, his time management and skills are fantastic and is an overall pleasure to work with. I would recommend Jack as a Web Designer/Developer to any business wanting to enhance their online branding.'
        }
      ]
    }
  }
}
</script>