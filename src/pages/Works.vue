<template>
  <Layout>
    <page-header title="Selected Works" />

    <div class="container">
      <div class="mt-5 mb-10 lg:mb-20 flex row flex-wrap">
        <single-item
          v-for="({ node }) in $page.allWork.edges"
          :key="node.id"
          class="column w-12/12 md:w-6/12"
          v-bind="node"
        />
      </div>
    </div>

    <section class="mt-10 mb-10 container">
      <h3 class="font-medium text-center">Other Companies I've Worked With</h3>

      <div class="flex flex-wrap row mt-10 justify-between">
        <div class="column w-6/12 md:w-3/12 text-center">
          <g-image src="~/assets/img/nottingham-council-logo.png" class="greyscale w-12/12 h-auto" />
        </div>
        <div class="column w-6/12 md:w-3/12 text-center">
          <g-image src="~/assets/img/totaljobs-logo.png" class="greyscale w-12/12 h-auto" />
        </div>
        <div class="column w-6/12 md:w-3/12 text-center">
          <g-image src="~/assets/img/capture-logo.png" class="greyscale w-12/12 h-auto" />
        </div>
        <div class="column w-6/12 md:w-3/12 text-center">
          <g-image src="~/assets/img/kruger-logo.png" class="greyscale w-12/12 h-auto" />
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
import SingleItem from '~/components/Work/SingleItem'

export default {
  components: {
    PageHeader,
    SlideIn,
    SingleItem
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