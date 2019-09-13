<template>
  <Layout>
    <page-header title="Selected Works" />

    <div class="container">
      <div class="mt-5 mb-10 lg:mb-20 flex row flex-wrap">
        <div
          v-for="({ node }, index) in $page.allWork.edges"
          :key="node.id"
          class="column w-12/12 lg:w-6/12"
        >
          <image-swipe-left>
            <g-image :src="node.image" />
          </image-swipe-left>

          <slide-in :reverse="true" :delay="200" class="pt-4 pb-12 flex flex-col">
            <div>
              <span
                class="text-xs tracking-wide uppercase text-grey-darker py-1 px-2 rounded bg-site-lighter mr-3"
                v-for="(item, index) in node.tags"
                :key="index"
              >{{ item }}</span>
            </div>

            <a
              :href="node.link"
              target="_blank"
              rel="noopener"
              :title="'Link to website for ' + node.title"
              class="block mt-2"
            >
              <h2 v-html="node.title" class="mb-0 text-black font-semibold leading-loose" />
            </a>

            <p class="mt-2 mb-3 text-grey-darker" v-text="node.description"></p>

            <span>
              <a
                :href="node.link"
                target="_blank"
                rel="noopener"
                class="link text-base mt-auto inline-block"
                :title="'Link to website for ' + node.title"
              >Visit Site &rarr;</a>
            </span>
          </slide-in>
        </div>
      </div>
    </div>

    <section class="mt-10 mb-10 container">
      <h3 class="font-medium text-center">Other Companies I've Worked With</h3>

      <div class="flex list-reset row mt-10 justify-between">
        <div>
          <g-image src="~/assets/img/nottingham-council-logo.png" class="greyscale" />
        </div>
        <div>
          <g-image src="~/assets/img/totaljobs-logo.png" class="greyscale" />
        </div>
        <div>
          <g-image src="~/assets/img/capture-logo.png" class="greyscale" />
        </div>
        <div>
          <g-image src="~/assets/img/kruger-logo.png" class="greyscale" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query Page ($page: Int) {
    allWork (page: $page) {
      edges {
       node {
          id
          title
          image
          date (format: "YYYY")
          description
          tags
          link
        }
      }
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import SlideIn from '~/components/Animation/SlideIn'
import ImageSwipeLeft from '~/components/Animation/ImageSwipeLeft'

export default {
  components: {
    PageHeader,
    SlideIn,
    ImageSwipeLeft
  },

  metaInfo: {
    title: 'Works |',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'A selection of works and projects that I have worked on over the last few years. Includes Craft, Laravel, VueJS and more.'
      }
    ]
  }
}
</script>

<style lang="postcss" scoped>
.greyscale {
  filter: grayscale(100);
  transition: 0.3s all ease-in-out;
}

.greyscale:hover {
  filter: none;
}
</style>