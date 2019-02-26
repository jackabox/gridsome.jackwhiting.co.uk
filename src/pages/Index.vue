<template>
  <Layout class="home">
    <div class="bg-pink-lighter pt-40 pb-10">
      <div class="container">
        <h1>Posts</h1>
      </div>
    </div>

    <ul class="list-reset">
      <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id" class="py-10">
        <div class="container">
          <router-link :to="node.path">
            <h2 v-html="node.title"/>
          </router-link>

          <div class="mt-3 mb-2 text-sm tracking-wide uppercase">{{ node.date }}</div>

          <div v-html="node.description"/>
        </div>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
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
export default {}
</script>

<style lang="postcss">
/* li:nth-child(even) {
  background: #f8f0f0;
} */
</style>
