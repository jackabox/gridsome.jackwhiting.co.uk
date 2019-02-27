<template>
  <Layout>
    <page-header :title="$page.blogPost.title" :date="$page.blogPost.date"/>

    <div class="mb-20">
      <article class="container article">
        <div class="content" v-html="$page.blogPost.content"/>
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
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content,
      tags
    }
  }
</page-query>

