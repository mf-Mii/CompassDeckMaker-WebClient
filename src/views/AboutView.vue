<template>
  <div class="container">
    <h1>{{getConfigValue('app.title')}}</h1>
  </div>
</template>

<style scoped lang="scss">

</style>
<script lang="ts">
import { NodeNicoMusic } from '@/lib/node-nicomusic.ts'
import {getConfigValue} from "../config.ts";
export default {
  name: 'AboutView',
  computed: {
  },
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    getConfigValue,
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
