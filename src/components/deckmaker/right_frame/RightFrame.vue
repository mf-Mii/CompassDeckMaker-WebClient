<script setup>

import RightDeck_TotalStatus from "@/components/deckmaker/right_frame/deck/RightDeck_TotalStatus.vue";
import RightDeck from "@/components/deckmaker/right_frame/deck/RightDeck.vue";
import RightHero from "@/components/deckmaker/right_frame/hero/RightHero.vue";
</script>

<template>
  <div id="rightframe">
    <RightDeck />
    <RightHero />
  </div>
</template>

<style scoped lang="scss">
#rightframe {
  height: 100%;
  width: 400px;
  background: repeating-linear-gradient(-45deg, #fff, #fff 3px, #ccc 0, #ccc 6px);
  z-index: 1000;
  overflow-x: hidden;
  overflow-y: scroll;
  border-left: 1px solid #888;


}
</style>
