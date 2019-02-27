<template>
  <Layout>
    <div class="container mt-0 pt-30">
      <div class="flex flex-wrap items-center row">
        <slide-in :reverse="true" :delay="0" class="w-full md:w-6/12 column">
          <h2 class="mb-4">Hey, I'm Jack</h2>
          <p>
            <b class="font-semibold">PHP &amp; JavaScript Developer located in Nottingham, UK.</b>
          </p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
        </slide-in>

        <div class="w-full md:w-6/12 mt-5 column">
          <image-swipe-left>
            <g-image src="~/assets/img/portrait.jpg" width="500" class="grid__img"/>
          </image-swipe-left>
        </div>
      </div>
    </div>
    <!-- 
    <div class="bg-pink-lighter py-20 mt-20">
      <div class="container">
        <h2>Recent Works</h2>
      </div>
    </div>-->
    <div class="bg-pink-lighter py-20 mt-20">
      <div class="container">
        <slide-in :reverse="true">
          <h2>Recent Posts</h2>
        </slide-in>

        <ul class="list-reset mt-5">
          <li v-for="({ node }, index) in $page.allPost.edges" :key="node._id" class>
            <slide-in
              :reverse="true"
              :delay="200 * parseInt(index)"
              class="my-3 flex flex-wrap justify-between row items-center"
            >
              <router-link :to="node.path" class="column w-12/12 lg:w-10/12">
                <h3
                  v-html="node.title"
                  class="mb-0 text-grey-darker font-semibold hover:text-black leading-loose"
                />
              </router-link>

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
          _id
          title
          date (format: "D MMM, YYYY")
          description
          path
        }
      }
    }
  }
</page-query>

<script>
import ImageSwipeLeft from '~/components/Animation/ImageSwipeLeft'
import SlideIn from '~/components/Animation/SlideIn'

export default {
  components: {
    ImageSwipeLeft,
    SlideIn
  },

  metaInfo: {
    title: 'Home'
  }
}
</script>