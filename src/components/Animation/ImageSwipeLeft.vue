<template>
  <div class="grid__item relative overflow-hidden">
    <div class="grid__link opacity-0" ref="imageEffect">
      <g-image src="~/assets/img/portrait.jpg" :width="width" class="grid__img"/>
    </div>

    <div class="grid__reveal bg-black" ref="imageEffectReveal">&nbsp;</div>
  </div>
</template>


<script>
import anime from 'animejs'

export default {
  props: ['src', 'width'],

  data() {
    return {
      options: {},
      animeOpts: {},
      animeRevealOpts: {}
    }
  },

  mounted() {
    this.setOptions()
    this.triggerEffects()
  },

  methods: {
    setOptions() {
      this.animeRevealOpts = {
        targets: this.$refs['imageEffectReveal'],
        easing: 'easeOutCubic',
        delay: function(t, i) {
          return i * 100
        },
        translateX: [
          { value: ['101%', '0%'], duration: 400 },
          { value: ['0%', '-101%'], duration: 400 }
        ]
      }

      this.animeOpts = {
        targets: this.$refs['imageEffect'],
        duration: 900,
        easing: 'easeOutCubic',
        delay: function(t, i) {
          return 400 + i * 100
        },
        opacity: {
          value: 1,
          duration: 1,
          easing: 'linear'
        }
      }
    },

    triggerEffects() {
      anime(this.animeRevealOpts)
      anime(this.animeOpts)
    }
  }
}
</script>

<style lang="postcss">
.grid__link,
.grid__img {
  display: block;
}

.grid__img {
  width: 100%;
}

.grid__reveal {
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
