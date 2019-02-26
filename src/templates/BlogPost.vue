<template>
  <Layout>
    <div class="bg-pink-lighter pt-40 pb-10 mb-20">
      <div class="container">
        <h1>{{ $page.blogPost.title }}</h1>
        <div class="mt-3 mb-10 text-md tracking-wide uppercase">{{ $page.blogPost.date }}</div>
      </div>
    </div>

    <div class="mb-20">
      <article class="article">
        <div class="content" v-html="$page.blogPost.content"/>
      </article>
    </div>
  </Layout>
</template>

<script>
export default {
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

<style lang="postcss" scoped>
.date {
  margin-top: 10px;
  margin-bottom: 40px;
}
</style>
