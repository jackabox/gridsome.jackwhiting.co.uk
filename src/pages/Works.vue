<template>
  <Layout>
    <page-header title="Works" />

    <div class="container">
      <ul class="list-reset mt-5 flex flex-wrap row justify-between">
        <li
          v-for="({ node }, index) in $page.allWork.edges"
          :key="node._id"
          class="column w-12/12 md:w-9/12"
        >
          <slide-in :reverse="true" :delay="200 * parseInt(index)" class="mt-3 mb-6">
            <a
              :href="node.link"
              target="_blank"
              rel="noopener"
              :title="'Link to website for ' + node.title"
            >
              <h3 v-html="node.title" class="mb-0 text-black font-semibold leading-loose" />
            </a>

            <p class="mt-2 text-grey-darker text-base" v-text="node.description"></p>

            <a
              :href="node.link"
              target="_blank"
              rel="noopener"
              class="inline-block mt-1 text-black text-sm border-b border-pink hover:bg-pink-lighter hover:border-pink-lighter"
              :title="'Link to website for ' + node.title"
            >Visit Site &rarr;</a>

            <div class="mt-2">
              <span
                class="text-xs tracking-wide uppercase text-grey-darker py-1 px-2 rounded bg-pink-lighter mr-3"
                v-for="(item, index) in node.tags"
                :key="index"
              >{{ item }}</span>
            </div>
          </slide-in>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
  query Page ($page: Int) {
    allWork (page: $page) {
      edges {
       node {
          _id
          title
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

export default {
  components: {
    PageHeader,
    SlideIn
  },

  metaInfo: {
    title: 'Works',
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