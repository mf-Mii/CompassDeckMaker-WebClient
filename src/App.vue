
<template>
  <LoadingScreen />
  <PageHeader />
  <RouterView />
</template>

<style lang="scss">
</style>
<script lang="ts">
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.min.js'
import 'https://use.fontawesome.com/releases/v5.15.3/js/all.js'
import '@/assets/js/jquery.min.js'
import '@/assets/css/common.scss'
import PageHeader from "@/components/PageHeader.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import {ref} from "vue";

export default {
  components: {
    PageHeader,
    LoadingScreen
  },
  setup() {
    return {
    }
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
