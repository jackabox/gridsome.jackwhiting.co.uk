<template>
  <div class="animation-slide-in" ref="slideIn">
    <slot/>
  </div>
</template>
    
    <script>
import anime from 'animejs'

export default {
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 0
    },
    reverse: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 1200
    }
  },

  data() {
    return {
      animation: null,
      translate: [-100, 0]
    }
  },

  mounted() {
    if (this.reverse) {
      this.translate = [100, 0]
    }

    this.initAnimation()
    this.trigger()
  },

  methods: {
    initAnimation() {
      const targets = this.$refs['slideIn']

      this.animation = anime({
        targets: targets,
        translateY: this.translate,
        opacity: [0, 1],
        autoplay: this.autoplay,
        easing: 'easeOutExpo',
        duration: this.duration,
        delay: 500 + this.delay
      })
    },

    trigger() {
      if (this.autoplay === false) {
        this.animation.play()
      }
    }
  }
}
</script>