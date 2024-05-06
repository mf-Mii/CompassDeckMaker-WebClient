<script setup>

</script>

<template>
  <div class="container">
    <h1>{{this.$config.app.title}}</h1>
  </div>
</template>

<style scoped lang="scss">

</style>
<script>
import { NodeNicoMusic } from '@/script/lib/node-nicomusic'
export default {
  name: 'About',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    play_audio(id) {
      new NodeNicoMusic(id).get_audio_as_blob().then((res) => {
        console.log(res)
        const fileReader = new FileReader();
        fileReader.onload = function() {
          console.log(this.result)
          const audio = new Audio(this.result)
          audio.defaultMuted = true;
          audio.play();
          audio.muted = false;
          audio.volume = 0.5;
        }
        fileReader.readAsDataURL(res)
      })
    }
  },
  mounted() {
  }
}
</script>
