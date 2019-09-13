<template>
  <Layout>
    <page-header title="Works" />

    <div class="container">
      <div class>
        <ul class="list-reset mt-5 mb-10 lg:mb-20">
          <li v-for="({ node }, index) in $page.allWork.edges" :key="node.id">
            <slide-in :reverse="true" :delay="200 * parseInt(index)" class="pt-4 pb-8">
              <div class="mb-2">
                <span
                  class="text-xs tracking-wide uppercase text-grey-darker py-1 px-2 rounded bg-site-lighter mr-3"
                  v-for="(item, index) in node.tags"
                  :key="index"
                >{{ item }}</span>

                <a
                  :href="node.link"
                  target="_blank"
                  rel="noopener"
                  :title="'Link to website for ' + node.title"
                  class="block mt-2"
                >
                  <h2 v-html="node.title" class="mb-0 text-black font-semibold leading-loose" />
                </a>

                <p class="mt-2 text-grey-darker" v-text="node.description"></p>

                <a
                  :href="node.link"
                  target="_blank"
                  rel="noopener"
                  class="link text-base mt-3 inline-block"
                  :title="'Link to website for ' + node.title"
                >Visit Site &rarr;</a>
              </div>
            </slide-in>
          </li>
        </ul>
        <freelance-work />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Page ($page: Int) {
    allWork (page: $page) {
      edges {
       node {
          id
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
import FreelanceWork from '~/components/CTA/FreelanceWork'

export default {
  components: {
    PageHeader,
    SlideIn,
    FreelanceWork
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