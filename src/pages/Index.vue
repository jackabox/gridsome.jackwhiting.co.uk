<template>
  <Layout>
    <div class="container mt-0 pt-30">
      <div class="flex flex-wrap items-center row">
        <slide-in :reverse="true" :delay="-600" class="w-full md:w-6/12 column">
          <h2 class="mb-4">Hey, I'm Jack</h2>
          <p>
            <b
              class="font-semibold"
            >A Product Designer &amp; Developer located in Nottingham, UK with 13 years experience.</b>
          </p>

          <p>
            I work for
            <a
              href="https://weareframework.co.uk"
              target="_blank"
              rel="noreferer noopener"
              class="text-black border-b border-pink hover:bg-pink-lighter hover:border-pink-lighter"
              title="Link to Framework Design's website"
            >Framework Design</a> - a small digital agency in the heart of Nottingham - where I specialise in crafting larger applications written with Laravel (PHP) and Vue (JavaScript). My other tasks often involve scoping projects, writing APIs or drinking gallons of Tea.
          </p>

          <p>
            I dabble in the odd freelance project, as long as it's awesome, to get in touch
            <a
              href="mailto:hi@jackwhiting.co.uk"
              class="text-black border-b border-pink hover:bg-pink-lighter hover:border-pink-lighter"
              title="Email Jack about Freelance"
            >email me</a>.
          </p>

          <p>
            Otherwise, you can find me with my family, at gigs or
            <s class="text-grey">burning</s> cooking food. I also have a daily battle with
            <a
              href="https://www.crohnsandcolitis.org.uk/about-inflammatory-bowel-disease/crohns-disease"
              target="_blank"
              rel="noreferer noopener"
              class="text-black border-b border-pink hover:bg-pink-lighter hover:border-pink-lighter"
              title="Link to find out more about Crohn's"
            >Crohn's Disease</a> after being diagnosed at the age of 18.
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
              <router-link
                :to="node.path"
                class="column w-12/12 lg:w-10/12"
                :title="'Link to post: ' + node.title"
              >
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
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Product Designer &amp; Developer located in Nottingham, UK with 13 years experience. Specialising in Laravel, Vue and JavaScript.'
      },
      {
        name: 'keywords',
        content:
          'Product Designer,Developer,Web Developer,Freelance,Nottingham,PHP,Laravel,Vue,JavaScript.'
      }
    ]
  }
}
</script>