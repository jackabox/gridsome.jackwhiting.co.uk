<template>
  <Layout>
    <page-header :title="$page.post.title" :date="$page.post.date" />

    <div class="container">
      <slide-in :reverse="true" :delay="200" class="article">
        <div class="mb-10 lg:mb-20 content" v-html="$page.post.content" />
      </slide-in>

      <slide-in :reverse="true" :delay="500">
        <div id="commento"></div>
      </slide-in>
    </div>
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import SlideIn from '~/components/Animation/SlideIn'

export default {
  components: {
    PageHeader,
    SlideIn
  },

  metaInfo() {
    return {
      title: this.$page.post.title + ' |',
      meta: [
        { name: 'author', content: 'Jack Whiting' },
        {
          key: 'description',
          name: 'description',
          content: this.$page.post.description
        }
      ],
      links: [
        {
          rel: 'canonical',
          href: 'https://jackwhiting.co.uk/posts/' + this.$page.post.slug
        }
      ],
      script: [
        {
          src: 'https://cdn.commento.io/js/commento.js',
          defer: true,
          'data-no-fonts': true
        }
      ]
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

