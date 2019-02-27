<template>
  <Layout>
    <page-header title="Posts"/>

    <ul class="list-reset">
      <li v-for="{ node } in $page.allPost.edges" :key="node._id" class="py-10">
        <div class="container">
          <router-link :to="node.path">
            <h2 v-html="node.title" class="hover:text-pink-darker"/>
          </router-link>

          <div class="mt-3 mb-2 text-sm tracking-wide uppercase text-grey-darker">{{ node.date }}</div>

          <div v-html="node.description"/>

          <router-link :to="node.path" class="mt-5 block">
            <span
              class="border border-2 border-pink-lighter inline-flex pb-1 uppercase text-sm text-grey-darker hover:text-black hover:bg-pink-lighter px-2 py-1 tracking-wide"
            >Read More</span>
          </router-link>
        </div>
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

export default {
  components: {
    PageHeader
  },

  metaInfo() {
    return {
      title: 'Posts'
    }
  }
}
</script>