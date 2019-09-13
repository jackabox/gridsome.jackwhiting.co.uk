<template>
  <Layout>
    <slide-in :delay="0" class="bg-black pt-30 lg:pt-40 pb-6 lg:pb-10 mb-10 lg:mb-20 z-0">
      <div class="container">
        <h1 class="text-white">Why Hire Me?</h1>
        <div class="mt-3 mb-6 text-md text-white w-12/12 md:w-10/12">
          <p>If you’ve landed on this page you’re probably wondering what makes me different? Well for a start I believe that every website is unique and should be treated as such. Your business needs are unique and require a thought out, strategic, approach.</p>
          <p>Whilst working together, I will take the time to go over what your project needs, what we can do to deliver the best product for you and any unique requirements you have. Together, we’ll work out the best technology and path for your website and strive to deliver something both beautiful and fit for purpose.</p>
        </div>
      </div>
    </slide-in>

    <slide-in :reverse="true" :delay="200" class="container">
      <h2 class="mb-5">What I Offer</h2>
      <p
        class="mb-10 pb-5 w-12/12 lg:w-9/12"
      >Whether it's a design, bulding a website, a mobile application or hosting. I've had experience with all elements of a website's lifecycle.</p>

      <what-offer />
    </slide-in>

    <slide-in :reverse="true" :delay="500" class="bg-grey-100 py-20 mt-10">
      <div class="container">
        <h2 class="mb-4 text-black">Technologies</h2>
        <p
          class="text-black lg:w-10/12"
        >I predominantely work with PHP and JavaScript and have grown to use a set of tools which helps me to deliver the most appropriate solution to each unique website. Hover over the technologies on the side to find out more about what I can provide.</p>

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
.content p {
  font-size: 1rem;
}
</style>