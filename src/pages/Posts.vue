<template>
  <Layout>
    <page-header title="Posts"/>

    <ul class="list-reset">
      <li v-for="({node}, index) in $page.allPost.edges" :key="node._id" class="py-10">
        <slide-in :reverse="true" :delay="200 * parseInt(index)">
          <router-link :to="node.path" :title="'Link to post: ' + node.title">
            <h2 v-html="node.title"/>
          </router-link>

          <div class="mt-3 mb-2 text-sm tracking-wide uppercase text-grey-darker">{{ node.date }}</div>

          <div v-html="node.description"/>

          <router-link :to="node.path" class="mt-5 block" :title="'Link to post: ' + node.title">
            <span
              class="border border-2 border-pink inline-flex pb-1 uppercase text-sm text-grey-darker hover:text-black hover:bg-pink px-2 py-1 tracking-wide"
            >Read More</span>
          </router-link>
        </slide-in>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Page ($page: Int) {
    allPost (page: $page) {
      edges {
        node {
          _id
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

export default {
  components: {
    PageHeader,
    SlideIn
  },

  mounted() {
    console.table(this.$page.allPost.edges)
  },

  metaInfo() {
    return {
      title: 'Posts'
    }
  }
}
</script>