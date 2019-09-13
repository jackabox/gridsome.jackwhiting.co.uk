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
          <h2 class="text-white mb-10 pb-5 text-center">Recent Works</h2>
        </slide-in>

        <div class="flex flex-wrap row justify-between">
          <single-item
            v-for="({ node }) in $page.allWork.edges"
            :key="node.id"
            class="column w-12/12 lg:w-6/12"
            v-bind="node"
          />
        </div>

        <div class="text-center">
          <g-link to="/works" class="btn">View More Works</g-link>
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

    allWork (page: $page, perPage: 2) {
      edges {
        node {
          id
          title
          image
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
import SingleItem from '~/components/Work/SingleItemDark'

export default {
  components: {
    ImageSwipeLeft,
    SlideIn,
    SingleItem
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
