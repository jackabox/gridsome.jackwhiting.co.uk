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
        <div v-show="index === currentService" v-html="service.content" class="mt-1 info"></div>
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
            '<p><a href="https://wordpress.org/" title="Official page of WordPress" target="_blank">WordPress</a> powers roughly 30% of the sites on the internet and as such makes it an extremely popular platform to use. Over the many years of development with WordPress I’ve managed to flesh out the most optimal setup providing ease of maintenance as well as saving you time with some of the headaches that other developers may miss.</p><p>As a rule of thumb, all WordPress sites developed are written from the ground up with no use of templates and no off the shelf solutions (which can cause a multitude of problems). I tend to keep plugins to a minimum, only utilising trusted sources.</p><p>Do you need e-commerce? I’ve got you covered, with the use of WooCommerce you’ll be able to kick start your e-commerce journey by utilising an extendable platform with a community to back it.</p>'
        },
        {
          title: 'Shopify',
          content:
            '<p><a href="https://www.shopify.co.uk/" title="Official page of Shopify" target="_blank">Shopify</a> is one of the best e-commerce platforms around, not only does it have an infrastructure that spans the globe (offering the best experience for your users). It automatically scales on times of high impacts - such as Black Friday - so your website does not go down.</p><p>I can work with you to set up a Shopify store with all of your details, get your products populated and build a custom theme from the ground that is optimised to drive sales through the site and deliver the results you are looking for.</p>'
        },
        {
          title: 'Craft',
          content:
            '<p><a href="https://craftcms.com/" title="Official page of Craft CMS" target="_blank">Craft</a> is one of the best CMS around. It is packed with a tonne of unique features and everything included is just one step ahead of the competitors.</p><p>If you have never used Craft before, then you will love the control panel and flexibility that is provided along with the superb internationalisation, flexible content and constant patches for security.</p><p>If you need to sell products online - Craft Commerce allows for the setup of a store so you can manage products, taxes, and shipping as needed whilst still utilising all the power and speed of the Craft platform.</p>'
        },
        {
          title: 'Laravel',
          content:
            '<p>Whether you need a fully bespoke system written from the ground up to manage your data or an API that can be accessed from a mobile application or single page application - Laravel can handle it all.</p><p><a href="https://laravel.com/" title="Official page of Laravel" target="_blank">Laravel</a> is the top-rated PHP framework and boasts an elegant and expressive syntax alongside a massive community who have written open-source packages to solve all the headaches of web development.</p><p>If you need something outside of the "norm" for a website - such as a CRM, Application, Custom Dashboard, etc - this is the choice. I will be able to get you off the ground running with a fully bespoke system built to perform at scale.</p>'
        },
        {
          title: 'Vue',
          content:
            '<p>JavaScript frameworks are all the rage at the moment, and there is none better in my opinion than <a href="https://vuejs.org/" title="Official page of Vue.js" target="_blank">Vue.js</a>. Vue.js provides easy to read and maintain syntax along with a massive community of support and open-source plugins.</p><p>If you need a SPA (Single page application) or a PWA (Progressive Web App) these can all be carefully crafted within Vue and built as an addition to your API.</p><p>Vue.js can also be used if you just want to spice up your website and add elements of complex interactivity to pages (such as guided forms, product builders, etc).</p>'
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