<template>
  <Layout>
    <slide-in :reverse="true" class="container pt-20 mt-20">
      <h1>Error 404</h1>
      <p>Sorry, that page cannot be found.</p>
      <p>
        <g-link to="/" class="btn mr-5">Home</g-link>
        <g-link to="/services/" class="btn">See What I Do</g-link>
      </p>
    </slide-in>
  </Layout>
</template>

<script>
import SlideIn from '~/components/Animation/SlideIn'

export default {
  components: {
    SlideIn
  }
}
</script>