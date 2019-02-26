<template>
  <Layout>
    <div class="container">
      <div class="flex flex-wrap items-center row">
        <div class="w-6/12 column">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
        </div>

        <div class="w-6/12 column">
          <image-swipe-left>
            <g-image src="~/assets/img/portrait.jpg" width="500" class="grid__img"/>
          </image-swipe-left>
        </div>
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
    title: 'Home'
  }
}
</script>