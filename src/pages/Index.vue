<template>
  <Layout>
    <div class="container mt-0 pt-30">
      <div class="flex flex-wrap items-center row">
        <slide-in :reverse="true" :delay="-600" class="w-full md:w-6/12 column">
          <h2 class="mb-4">Hey, I'm Jack</h2>
          <p>
            <b
              class="font-semibold"
            >A Web Developer located in Nottingham, UK with over 10 years experience.</b>
          </p>

          <p>
            I currently work as a Lead Developer for
            <a
              href="https://weareframework.co.uk"
              target="_blank"
              rel="noreferer noopener"
              class="text-black border-b border-pink hover:bg-pink-lighter hover:border-pink-alt"
              title="Link to Framework Design's website"
            >Framework Design</a> - a small digital agency in the heart of Nottingham - where I specialise in crafting larger applications written with Laravel (PHP) and Vue (JavaScript). My other tasks often involve scoping projects, writing technical specifications and aiding others.
          </p>

          <p>
            I love taking on freelance projects in my spare time, especially in JavaScript. If you have something you want to work on together then please feel free
            <a
              href="mailto:hi@jackwhiting.co.uk"
              class="text-black border-b border-pink hover:bg-pink-lighter hover:border-pink-alt"
              title="Email Jack about Freelance"
            >to get in touch with me</a>.
          </p>

          <p>Otherwise, you can find me with my family and puppy, at gigs or cooking food.</p>
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

    <section class="bg-pink-lighter py-20 mt-20">
      <div class="container">
        <slide-in :reverse="true">
          <h2>Selected Works</h2>
        </slide-in>

        <div class="flex flex-wrap row justify-between">
          <ul class="list-reset w-12/12 lg:w-8/12 mt-6">
            <li
              v-for="({ node }, index) in $page.allWork.edges"
              :key="node._id"
              class="column w-12/12"
            >
              <slide-in :reverse="true" :delay="200 * parseInt(index)" class="mt-3 mb-6">
                <div class="text-sm tracking-wide uppercase text-grey-darker mt-1 lg:mt-0"></div>

                <a
                  :href="node.link"
                  target="_blank"
                  rel="noopener"
                  :title="'Link to website for ' + node.title"
                >
                  <h3 class="mb-0 text-black font-semibold leading-loose">
                    <span>{{ node.title }}</span>
                  </h3>
                </a>

                <p class="mt-1 text-base" v-text="node.description"></p>

                <div class="mt-1">
                  <span
                    class="text-xs tracking-wide uppercase text-grey-darker py-1 px-2 rounded bg-white mr-3"
                    v-for="(item, index) in node.tags"
                    :key="index"
                  >{{ item }}</span>
                </div>
              </slide-in>
            </li>
          </ul>

          <div class="w-12/12 lg:w-3/12">
            <slide-in :reverse="true">
              <h4 class="mt-3 mb-2">Other Clients</h4>
              <p
                class="text-base"
              >I've worked on various projects overtime with some of the following clients:</p>
              <ul class="ml-1 pl-4">
                <li class="text-base mt-1">
                  <span class="text-black" target="_blank" rel="noopener noreferrer">Millpledge</span>
                </li>
                <li class="text-base mt-1">
                  <span href class="text-black" target="_blank" rel="noopener noreferrer">Travelteer</span>
                </li>
                <li class="text-base mt-1">
                  <span
                    class="text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Capture Our Wedding</span>
                </li>
                <li class="text-base mt-1">
                  <span
                    href
                    class="text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Pancake App</span>
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

    allWork (page: $page, perPage: 4) {
      edges {
        node {
          _id
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

export default {
  components: {
    ImageSwipeLeft,
    SlideIn
  },

  metaInfo: {
    title: 'PHP Web Developer & Product Designer | Nottingham',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Web Developer located in Nottingham, UK with over 10 years experience. Specialising in Laravel, Vue and JavaScript.'
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
