<template>
  <div class="row flex flex-wrap">
    <div class="column w-12/12 md:w-3/12">
      <ul
        class="list-reset justify-between md:justify-start items-center md:items-start flex flex-wrap md:flex-col mb-4 md:mb-0"
      >
        <li
          class="service-item text-black mt-0 md:mb-3 lg:text-2xl lg:mr-0 font-medium cursor-pointer"
          :class="{ 'opacity-50 inactive': index != currentService }"
          v-for="(service, index) in services"
          :key="index"
          v-text="service.title"
          @click="changeCurrentService(index)"
        />
      </ul>
    </div>

    <div class="w-12/12 md:w-9/12 column text-black">
      <transition name="fade" v-for="(service, index) in services" :key="index">
        <div v-show="index === currentService" v-html="service.content" class="mt-1 content"></div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentService: 0,
      services: [
        {
          title: 'WordPress',
          content:
            '<p>WordPress powers roughly 30% of the sites on the internet and as such makes it an extremely popular platform to use. Over the many years of development with WordPress I’ve managed to flesh out the most optimal setup providing ease of maintenance as well as saving you time with some of the headaches that other developers may miss.</p><p>As a rule of thumb, all WordPress sites developed are written from the ground up with no use of templates and no off the shelf solutions (which can cause a multitude of problems). I tend to keep plugins to a minimum, only utilising trusted sources.</p><p>Do you need e-commerce? I’ve got you covered, with he use of WooCommerce you’ll be able to kick start your e-commerce journey by utilising an extendable platform with a community to back it.</p>'
        },
        {
          title: 'Shopify',
          content:
            '<p>Shopify provides the infrastructure to get your site off the ground and scale it to the masses. It’s the perfect platform when you are specifically targeting e-commerce. I will work with you to craft the perfect website for your company to maximise sales (and profit).</p>'
        },
        {
          title: 'Craft CMS',
          content:
            '<p>Craft is one of my personal favourite systems at the minute and bridges the gap between WordPress and Laravel. It’s the perfect system to scale your website up without the need for a fully bespoke system, it offers a lot of power in a small foot print meaning your site can be fully customised whilst still loading blazing fast.</p><p>Need to sell products online? Craft Commerce allows for the setup of an international store featuring products, taxes and shipping as needed whilst still utilising all the power and speed of the Craft platform.</p>'
        },
        {
          title: 'Laravel',
          content:
            '<p>If you don’t think your site fits into one of the previous technologies then Laravel could be the perfect choice. Specifically crafted from the ground up to encapsulate all of your companies needs, whether it’s a fully customised website, a single page application of an API for use elsewhere Laravel has got you covered.</p>'
        },
        {
          title: 'Vue',
          content:
            '<p>Part of all the rage right now, whether it’s for adding complex interactions to your website or for the generation of single page applications with offline support. Vue can also be utilised to build mobile applications that can work natively on iOS or Android.</p>'
        }
      ]
    }
  },

  methods: {
    changeCurrentService(index) {
      this.currentService = index
    }
  }
}
</script>

<style lang="postcss" scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>