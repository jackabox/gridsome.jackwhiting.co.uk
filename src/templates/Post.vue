<template>
  <Layout>
    <page-header :title="$page.post.title" :date="$page.post.date"/>

    <div class="mb-20">
      <article class="container article">
        <div class="content" v-html="$page.post.content"/>
      </article>
    </div>
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader'

export default {
  components: {
    PageHeader
  },

  metaInfo() {
    return {
      title: this.$page.blogPost.title
    }
  }
}
</script>

<page-query>
  query Post ($path: String!) {
    post (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content,
      tags
    }
  }
</page-query>

