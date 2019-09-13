<template>
  <Layout>
    <div class="container mt-0 pt-30">
      <div class="flex flex-wrap items-center row">
        <slide-in :reverse="true" :delay="-600" class="w-12/12 md:w-7/12 column">
          <h2 class="mb-4">About Me</h2>
          <p>Hey, I am a Freelance Web Developer specialising in carefully crafted websites using Laravel, Craft and WordPress. I'm located in Nottingham, UK with over 10 years experience.</p>
          <p>If you’ve landed on this page you’re probably wondering what makes me different? Well for a start I believe that every website is unique and should be treated as such. Your business needs are unique and require a thought out, strategic, approach.</p>
          <p>Whilst working together, I will take the time to go over what your project needs, what we can do to deliver the best product for you and any unique requirements you have. Together, we’ll work out the best technology and path for your website and strive to deliver something both beautiful and fit for purpose.</p>

          <p>
            <g-link
              to="/contact"
              class="btn btn--small"
              title="Email Jack about Freelance"
            >I'm currently available for new projects &rarr;</g-link>
          </p>
        </slide-in>

        <div class="w-full md:w-6/12 mt-5 column"></div>
      </div>
    </div>

    <div class="container mt-20">
      <h2 class="mb-10 text-center">What I Offer</h2>

      <div class="row flex flex-wrap">
        <div class="column w-6/12 md:w-4/12 mb-10">
          <h4>Web Design</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ex.</p>
        </div>
        <div class="column w-6/12 md:w-4/12 mb-10">
          <h4>Web Developemnt</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ex.</p>
        </div>
        <div class="column w-6/12 md:w-4/12 mb-10">
          <h4>E-commerce</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ex.</p>
        </div>
        <div class="column w-6/12 md:w-4/12 mb-10">
          <h4>Mobile Applications</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ex.</p>
        </div>
        <div class="column w-6/12 md:w-4/12">
          <h4>Single Page Applications</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ex.</p>
        </div>
        <div class="column w-6/12 md:w-4/12">
          <h4>Hosting &amp; After-care</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ex.</p>
        </div>
      </div>
    </div>

    <section class="bg-black py-20 mt-10">
      <div class="container">
        <h1 class="text-white">Services</h1>
        <p
          class="text-white"
        >I predominantely work with PHP and JavaScript and have grown to use a set of tools which helps me to deliver the most appropriate solution to each unique website. Hover over the technologies on the side to find out more about what I can provide.</p>

        <div class="row mt-10 flex flex-wrap">
          <div class="column w-12/12 md:w-3/12">
            <ul class="list-reset">
              <li
                class="service-item text-white text-2xl font-medium cursor-pointer"
                :class="{ 'opacity-50 inactive': index != currentService }"
                v-for="(service, index) in services"
                :key="index"
                v-text="service.title"
                @click="changeCurrentService(index)"
              ></li>
            </ul>
          </div>
          <div class="w-12/12 md:w-9/12 column text-white">
            <transition name="fade" v-for="(service, index) in services" :key="index">
              <div v-show="index === currentService" v-html="service.content"></div>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import SlideIn from '~/components/Animation/SlideIn'
import FreelanceWork from '~/components/CTA/FreelanceWork'

export default {
  components: {
    PageHeader,
    SlideIn,
    FreelanceWork
  },

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
        },
        {
          title: 'Other',
          content: '<p></p>'
        }
      ]
    }
  },

  methods: {
    changeCurrentService(index) {
      this.currentService = index
    }
  },

  metaInfo: {
    title: 'Why Hire |',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: ''
      }
    ]
  }
}
</script>

<style lang="postcss" scoped>
.service-item {
  transition: 0.3s all ease-in-out;
}

.service-item:not(.inactive) {
  transform: translateX(10px);
}

.fade-enter-active {
  transition: opacity 0.5s;
}

/* .fade-leave-active {
  transiton: opacity 0s;
} */

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>