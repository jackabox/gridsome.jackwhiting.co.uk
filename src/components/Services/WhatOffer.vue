<template>
  <div class="row flex flex-wrap">
    <div class="column w-6/12 md:w-4/12 mb-10">
      <IconSolution />
      <h4 class="mt-3">Strategic Planning</h4>
      <p>Planning is fundamental to a successful project. I'll work with you to find out all of your needs.</p>
    </div>

    <div class="column w-6/12 md:w-4/12 mb-10">
      <IconDesign />
      <h4 class="mt-3">Web Design</h4>
      <p>Need a design? I'll work with you by hand crafting the website to your project requirements.</p>
    </div>

    <div class="column w-6/12 md:w-4/12 mb-10">
      <IconDev />
      <h4 class="mt-3">Web Developemnt</h4>
      <p>Written from the ground up with the best system for your needs &mdash; websites that are built to last years.</p>
    </div>

    <div class="column w-6/12 md:w-4/12 mb-10">
      <IconCommerce />
      <h4 class="mt-3">E-commerce</h4>
      <p>Sell products online? International or just locall? I'll help you set up the perfect online store.</p>
    </div>

    <div class="column w-6/12 md:w-4/12 mb-10">
      <IconApp />
      <h4 class="mt-3">Mobile Applications</h4>
      <p>Want to deliver a mobile application on the App Store or Google Play Store, I've got you covered.</p>
    </div>

    <div class="column w-6/12 md:w-4/12 mb-10">
      <IconHosting />
      <h4 class="mt-3">Hosting &amp; After-care</h4>
      <p>Websites and apps need somewhere to live. I can help keep your site secure and backed up.</p>
    </div>
  </div>
</template>

<script>
// SVG
import IconApp from '~/assets/svg/app-dev.svg'
import IconDev from '~/assets/svg/web-dev.svg'
import IconDesign from '~/assets/svg/web-design.svg'
import IconCommerce from '~/assets/svg/commerce.svg'
import IconHosting from '~/assets/svg/hosting.svg'
import IconSolution from '~/assets/svg/solutions.svg'

export default {
  components: {
    IconApp,
    IconDev,
    IconDesign,
    IconCommerce,
    IconSolution,
    IconHosting
  }
}
</script>