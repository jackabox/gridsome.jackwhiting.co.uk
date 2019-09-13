<template>
  <div class="w-12/12 flex flex-col">
    <header class="fixed pin-x py-4 bg-white z-10">
      <div class="container flex items-center justify-between">
        <g-link class="heading-link text-black hover:text-site" to="/" title="Link to home page">
          <h1 class="text-base font-bold uppercase mb-0 mt-0 tracking-wide">Jack</h1>
        </g-link>

        <nav>
          <g-link
            to="/works"
            class="ml-5 tracking-wide text-base text-grey-darker hover:text-black"
            title="View all works"
          >Works</g-link>

          <g-link
            to="/services"
            class="ml-5 md:ml-7 tracking-wide text-base text-grey-darker hover:text-black"
            title="View my services"
          >Why Hire Me?</g-link>

          <g-link
            to="/posts"
            class="ml-5 md:ml-7 tracking-wide text-base text-grey-darker hover:text-black"
            title="View all posts"
          >Posts</g-link>
          <g-link
            to="/contact"
            class="ml-5 md:ml-7 tracking-wide text-base text-site hover:text-site-darker"
            title="Contact Me"
          >Get In Touch</g-link>
        </nav>
      </div>
    </header>

    <div class="h-full">
      <slot />
    </div>

    <footer class="bg-black p-12 mt-20">
      <div class="container">
        <div class="row flex flex-wrap justify-between">
          <div class="column w-7/12">
            <h3 class="text-white font-medium mb-3">Like what you see?</h3>

            <p
              class="text-grey-100"
            >I'm currently available for new web development work and would love to work together on your next project. Get in touch with me to discuss your projects details</p>

            <p class="text-white">
              <g-link
                to="/contact"
                class="btn btn"
                title="Get in touch with Jack about Freelance"
              >Get In Touch &rarr;</g-link>
            </p>
          </div>

          <div class="column w-3/12 flex flex-col">
            <nav>
              <g-link
                to="/works"
                class="block mb-2 tracking-wide text-base text-grey"
                title="View all works"
              >Works</g-link>

              <g-link
                to="/services"
                class="block mb-2 tracking-wide text-base text-grey"
                title="View my services"
              >Why Hire Me?</g-link>

              <g-link
                to="/posts"
                class="block mb-2 tracking-wide text-base text-grey"
                title="View all posts"
              >Posts</g-link>
              <g-link
                to="/contact"
                class="block mb-2 tracking-wide text-base text-grey"
                title="Contact Me"
              >Get In Touch</g-link>
            </nav>

            <p
              class="uppercase text-xs tracking-wide text-grey mt-auto"
            >&copy; Jack 2019 (and forever)</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  metaInfo: {
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org/',
          '@type': 'Person',
          name: 'Jack Whiting',
          url: 'https://jackwhiting.co.uk/',
          image:
            'https://jackwhiting.co.uk/assets/static/portrait.b269a45.7883773.jpg',
          sameAs: [
            'https://twitter.com/jackabox',
            'https://www.linkedin.com/in/jack-whiting-0289a555',
            'https://github.com/jackabox',
            'https://jackwhiting.co.uk/'
          ],
          jobTitle: 'Freelance Web Developer',
          worksFor: {
            '@type': 'Organization',
            name: 'Jack Whiting'
          }
        }
      }
    ]
  }
}
</script>
