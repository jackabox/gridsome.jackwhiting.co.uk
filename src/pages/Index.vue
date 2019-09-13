<template>
  <Layout>
    <div class="container mt-0 pt-30">
      <div class="flex flex-wrap items-center row">
        <slide-in :reverse="true" :delay="-600" class="w-full md:w-6/12 column">
          <h2 class="mb-4">Freelance Web Developer</h2>
          <p>
            <b
              class="font-semibold"
            >Hey, I am Jack a freelance Web Developer located in Nottingham, UK with over 10 years experience.</b>
          </p>

          <p
            class="mt-4"
          >I specialise in crafting websites with PHP and JavaScript. A few of my favourite tools are Laravel, Craft, Shopify, WordPress and VueJS. I make sure to use the best system for each individual project!</p>

          <p
            class="mt-4"
          >Before I decided to go freelance, I've worked across multiple digital agencies as (Lead) Web Developer which has granted me experience across all stages of delivering a website and allows me to push this knowledge into any work I undertake.</p>

          <p>
            <g-link
              to="/contact"
              class="btn btn--small"
              title="Email Jack about Freelance"
            >I'm currently available for new projects &rarr;</g-link>
          </p>
        </slide-in>

        <div class="w-full md:w-6/12 mt-5 column">
          <image-swipe-left>
            <g-image
              src="~/assets/img/portrait.jpg"
              width="500"
              class="grid__img"
              alt="Profile picture of Jack"
            />
          </image-swipe-left>
        </div>
      </div>
    </div>

    <section class="bg-black py-20 mt-20">
      <div class="container">
        <slide-in :reverse="true">
          <h2 class="text-white">Selected Works</h2>
        </slide-in>

        <div class="flex flex-wrap row justify-between">
          <ul class="list-reset w-12/12 lg:w-8/12 mt-6">
            <li
              v-for="({ node }, index) in $page.allWork.edges"
              :key="node._id"
              class="column w-12/12"
            >
              <slide-in :reverse="true" :delay="200 * parseInt(index)" class="mt-3 mb-8">
                <a
                  :href="node.link"
                  target="_blank"
                  rel="noopener"
                  :title="'Link to website for ' + node.title"
                >
                  <h3 class="mb-0 text-white font-medium leading-loose">
                    <span>{{ node.title }}</span>
                  </h3>
                </a>

                <p class="mt-1 text-base text-grey-100" v-text="node.description"></p>

                <div class="mt-2">
                  <span
                    class="text-xs text-grey-darker tracking-wide uppercase py-1 px-2 rounded bg-site-lighter mr-3 font-medium"
                    v-for="(item, index) in node.tags"
                    :key="index"
                  >{{ item }}</span>
                </div>
              </slide-in>
            </li>
          </ul>

          <div class="w-12/12 lg:w-3/12">
            <slide-in :reverse="true">
              <h4 class="mt-3 mb-2 text-white">Other Clients</h4>
              <p
                class="text-base text-grey-100"
              >Most of my work has been under NDA, but here are a few of the clients that I've worked with:</p>
              <ul class="ml-1 pl-4 text-grey-100">
                <li class="text-base mt-1">
                  <span>Travelteer</span>
                </li>
                <li class="text-base mt-1">
                  <span>Capture Our Wedding</span>
                </li>
                <li class="text-base mt-1">
                  <span>Pancake App</span>
                </li>
                <li class="text-base mt-1">
                  <span>and more...</span>
                </li>
              </ul>
            </slide-in>
          </div>
        </div>
      </div>
    </section>

    <div class="py-20">
      <div class="container">
        <slide-in :reverse="true">
          <h2>Recent Posts</h2>
        </slide-in>

        <ul class="list-reset mt-5">
          <li v-for="({ node }, index) in $page.allPost.edges" :key="node.id" class>
            <slide-in
              :reverse="true"
              :delay="200 * parseInt(index)"
              class="my-3 flex flex-wrap justify-between row items-center"
            >
              <g-link
                :to="node.path"
                class="column w-12/12 lg:w-10/12 border-b-0 pb-0"
                :title="'Link to post: ' + node.title"
              >
                <h3 v-html="node.title" class="mb-0 font-normal hover:text-site leading-loose" />
              </g-link>

              <div
                class="column w-12/12 lg:w-2/12 text-sm tracking-wide uppercase text-grey-darker lg:text-right mt-1 lg:mt-0"
              >{{ node.date }}</div>
            </slide-in>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <freelance-work />
    </div>
  </Layout>
</template>

<page-query>
  query Post ($page: Int) {
    allPost (page: $page, perPage: 5) {
      edges {
        node {
          id
          title
          date (format: "D MMM, YYYY")
          description
          path
        }
      }
    }

    allWork (page: $page, perPage: 4) {
      edges {
        node {
          id
          title
          date (format: "YYYY")
          tags
          description
          link
        }
      }
    }
  }
</page-query>

<script>
import ImageSwipeLeft from '~/components/Animation/ImageSwipeLeft'
import SlideIn from '~/components/Animation/SlideIn'
import FreelanceWork from '~/components/CTA/FreelanceWork'

export default {
  components: {
    ImageSwipeLeft,
    SlideIn,
    FreelanceWork
  },

  metaInfo: {
    title: '',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Freelance Web Developer in Nottingham, UK with over 10 years experience working with WordPress, Laravel, Craft and Vue. Currently available for new projects.'
      },
      {
        name: 'keywords',
        content:
          'Web,Developer,Web Developer,Freelance,Nottingham,PHP,Laravel,Vue,JavaScript,WordPress,Craft,WooCommerce,Craft Commerce.'
      }
    ]
  }
}
</script>
