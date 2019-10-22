<template>
  <Layout>
    <slide-in :delay="0" class="bg-black pt-30 lg:pt-40 pb-6 lg:pb-10 mb-10 lg:mb-20 z-0">
      <div class="container">
        <h1 class="text-white">Why Hire Me?</h1>
        <div class="mt-3 mb-6 text-md text-white w-12/12 md:w-10/12">
          <p>If you’ve landed on this page you’re probably wondering what makes me different? Well for a start I believe that every website is unique and should be treated as such. Your business needs are unique and require a thought out, strategic, approach.</p>
          <p>Whilst working together, I will take the time to go over what your project needs, what we can do to deliver the best product for you and any unique requirements you have. Next, we will work out the best technology for your website to make it stand out by delivering something both beautiful.</p>
        </div>
      </div>
    </slide-in>

    <slide-in :reverse="true" :delay="200" class="container">
      <h2 class="mb-5">What I Offer</h2>
      <p
        class="mb-10 pb-5 w-12/12 lg:w-9/12"
      >Whatever your needs I can help you out with your journey, whether it's designing or building a website, creating mobile applications or providing a stellar hosting platform.</p>

      <what-offer />
    </slide-in>

    <slide-in :reverse="true" :delay="500" class="bg-grey-100 py-20 mt-10">
      <div class="container">
        <h2 class="mb-4 text-black">Technologies</h2>
        <p
          class="text-black lg:w-10/12"
        >I predominantly work with PHP and JavaScript and over time have grown to become fond of a set of technologies which help me to deliver a first-class solution to each website's unique requirements. Click through the list below to learn about what each can be used for.</p>

        <div class="py-10 mt-10 border-t-2" style="border-color: #E2E8F0">
          <technology-information />
        </div>
      </div>
    </slide-in>

    <slide-in :reverse="true" :delay="800" class="mt-20 container">
      <div class="w-12/12 lg:w-10/12 mx-auto">
        <h3 class="font-medium mb-10">Don't just take my word for it...</h3>

        <testimonial-slider />
      </div>
    </slide-in>
  </Layout>
</template>

<script>
import SlideIn from '~/components/Animation/SlideIn'

import TestimonialSlider from '~/components/Services/TestimonialSlider'
import WhatOffer from '~/components/Services/WhatOffer'
import TechnologyInformation from '~/components/Services/TechnologyInformation'

export default {
  components: {
    SlideIn,
    TestimonialSlider,
    WhatOffer,
    TechnologyInformation
  },

  metaInfo: {
    title: 'Why Hire Me? |',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Need a new website? Here is what sets me apart as a freelance web developer from others and how I can provide the best experience for your new website.'
      }
    ]
  }
}
</script>

<style lang="postcss" scoped>
.service-item {
  transition: 0.3s all ease-in-out;
}

@media (min-width: 768px) {
  .service-item:not(.inactive) {
    transform: translateX(10px);
  }
}
</style>

<style lang="postcss">
.info p {
  font-size: 1rem;
}
</style>