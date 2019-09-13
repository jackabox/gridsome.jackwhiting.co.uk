<template>
  <Layout>
    <page-header title="Posts" />

    <div class="container flex">
      <div class>
        <ul class="list-reset">
          <li v-for="({node}, index) in $page.allPost.edges" :key="node.id" class="pt-4 pb-8">
            <slide-in :reverse="true" :delay="200 * parseInt(index)">
              <div
                class="mt-3 mb-2 text-sm tracking-wide uppercase text-grey-darker"
              >{{ node.date }}</div>

              <g-link :to="node.path" :title="'Link to post: ' + node.title">
                <h2 v-html="node.title" />
              </g-link>

              <div v-html="node.description" />

              <g-link
                :to="node.path"
                class="link text-base mt-5 inline-block block"
                :title="'Link to post: ' + node.title"
              >
                <span class>Read More</span>
              </g-link>
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
    allPost (page: $page) {
      edges {
        node {
          id
          title
          date (format: "D MMMM, YYYY")
          description
          path
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
    title: 'Posts |',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Thoughts and ramblings of Jack about freelancing, laravel, vuejs, wordpress and more.'
      }
    ]
  }
}
</script>