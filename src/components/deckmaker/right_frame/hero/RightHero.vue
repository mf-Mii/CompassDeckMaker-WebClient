<script setup>

import RightHero_Summary from "@/components/deckmaker/right_frame/hero/RightHero_Summary.vue";
import RightHero_Detail from "@/components/deckmaker/right_frame/hero/RightHero_Detail.vue";
import RightHero_PageSwitchButtons from "@/components/deckmaker/right_frame/hero/RightHero_ButtonsPageSwitch.vue";
import RightHero_PageFeature from "@/components/deckmaker/right_frame/hero/RightHero_PageFeature.vue";
import RightHero_PageInfo from "@/components/deckmaker/right_frame/hero/RightHero_PageInfo.vue";
import RightHero_PageCardData from "@/components/deckmaker/right_frame/hero/RightHero_PageCardData.vue";
</script>

<template>
  <div id="heroInfo">
    <div id="heroInfo-Title">
      <h2>HERO</h2>
    </div>
    <div id="heroInfo-content">
      <RightHero_Summary/>
      <RightHero_Detail/>
    </div>
    <div id="heroInfo-more">
      <RightHero_PageSwitchButtons />
      <div class="page-container" page-index="0">
        <RightHero_PageInfo />
        <RightHero_PageFeature />
        <RightHero_PageCardData />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#heroInfo {
  margin: 20px 10px;

  #heroInfo-Title {
    border-bottom: 2px solid #000;
    margin-bottom: 10px;
  }

  // 概要の表示
  #heroInfo-content {
    display: flex;
  }

  // 切り替えページ
  #heroInfo-more {
    margin-top: 10px;
    max-height: 100%;
    position: relative;

    .page-container {
      width: 1200px;
      // overflow-x: hidden;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      transition: 0.5s;

      &[page-index="0"] {
        transform: translateX(0);
      }

      &[page-index="1"] {
        transform: translateX(-400px);
      }

      &[page-index="2"] {
        transform: translateX(-800px);
      }

      > :deep(.page) {
        width: 360px;
        display: inline-block;
        margin-right: 40px;
      }
    }
  }
}
</style>
