<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'https://use.fontawesome.com/releases/v5.15.3/js/all.js'
import 'jquery/dist/jquery.min.js'
import '@/assets/css/common.scss'
import {NodeNicoMusic} from "@/script/lib/node-nicomusic";
</script>
<template>
  <LoadingScreen />
  <Header />
  <router-view />
</template>

<style scoped>
</style>
<script>
import Header from "@/components/Header.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import {NodeNicoMusic} from "@/script/lib/node-nicomusic";

export default {
  components: {
    Header,
    LoadingScreen
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
