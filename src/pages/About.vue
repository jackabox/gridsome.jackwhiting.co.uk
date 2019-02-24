<template>
  <Layout>
    <div class="flex flex-wrap">
      <div class="w-6/12">
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
      </div>

      <div class="w-6/12">
        <image-swipe-left>
          <g-image src="~/assets/img/portrait.jpg" width="900" class="grid__img"/>
        </image-swipe-left>
      </div>
    </div>
  </Layout>
</template>

<script>
import ImageSwipeLeft from '~/components/Animation/ImageSwipeLeft'

export default {
  components: {
    ImageSwipeLeft
  },

  metaInfo: {
    title: 'About us'
  }
}
</script>