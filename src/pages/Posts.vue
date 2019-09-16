<template>
  <Layout>
    <page-header title="Posts" />

    <div class="container">
      <div class="mb-10">
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
      </div>

      <slide-in :reverse="true" :delay="200" class="pagination">
        <Pager :info="$page.allPost.pageInfo" />
      </slide-in>
    </div>
  </Layout>
</template>

<page-query>
  query Page($page: Int) {
    allPost (perPage: 10, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
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
import { Pager } from 'gridsome'
import PageHeader from '~/components/PageHeader'
import SlideIn from '~/components/Animation/SlideIn'

export default {
  components: {
    Pager,
    PageHeader,
    SlideIn
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

<style lang="postcss">
.pagination a {
  margin-right: 20px;
  padding-bottom: 5px;
  border-bottom: 2px solid white;
}

.pagination a:not(.active):hover {
  border-color: #9f7aea;
}
</style>