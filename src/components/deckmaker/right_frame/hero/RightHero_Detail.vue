<script setup>

import RightHero_Status from "@/components/deckmaker/right_frame/hero/RightHero_Status.vue";
import RightHero_Medal from "@/components/deckmaker/right_frame/hero/RightHero_Medal.vue";
import CPS_ToggleButton from "@/components/CPS_ToggleButton.vue";
</script>

<template>
  <div id="heroInfo-cont-detail">
    <ul id="heroInfo-cont-statusBox">
      <RightHero_Status type="atk" />
      <RightHero_Status type="def" />
      <RightHero_Status type="phy" />
    </ul>
    <div id="heroInfo-cont-detailStatus">
      <div class="heroDetailStatus" data-cpsdm-herostatus="len"><span>射程|</span><span>4ﾏｽ</span></div>
      <div class="heroDetailStatus" data-cpsdm-herostatus="spd"><span>速度|</span><span>4ﾏｽ/s</span></div>
    </div>
    <div id="heroInfo-cont-buttons">
      <ul class="list-unstyled" id="heroInfo-Medals">
        <RightHero_Medal />
        <RightHero_Medal />
        <RightHero_Medal />
      </ul>
      <div id="heroInfo-MedalEnableBtnContainer">
        <span class="btn-label">メダル適応</span>
        <CPS_ToggleButton />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#heroInfo-cont-detail {
  flex: 1;
  #heroInfo-cont-statusBox {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  #heroInfo-cont-detailStatus {
    display: flex;
    color: #666;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    flex-direction: row;

    .heroDetailStatus {
      display: inline-block;
      font-weight: bold;
      margin: 0 10px;

      &::before {
        content: " ";
        display: inline-block;
        width: var(--cpsdm-cardDetail-stat-size);
        height: var(--cpsdm-cardDetail-stat-size);
        background-size: contain;
        background-position: center;
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }

      &[data-cpsdm-herostatus="len"]::before {
        background-image: url(http://cpsdm-assets.local.mfmii.work/img/icons/herostat_len.png);
      }

      &[data-cpsdm-herostatus="spd"]::before {
        background-image: url(http://cpsdm-assets.local.mfmii.work/img/icons/herostat_spd.png);
      }
    }
  }

  #heroInfo-cont-buttons {
    display: flex;

    #heroInfo-Medals {
      margin: 0;
      display: flex;
      flex: 3;

      .medal {
        flex: 1;
        > div {
          position: relative;

          > img {
            position: absolute;

            &.medal_base {
              width: 100%;
            }

            &.medal_icon {
              width: 65%;
              left: 50%;
              top: 50%;
              transform: translate(-50%, 22.5%);
            }
          }
        }
      }
    }

    #heroInfo-MedalEnableBtnContainer {
      flex: 2;
      margin-left: 10px;
      user-select: none;
      > * {
        display: block;
        width: 100%;
      }
      .btn-label {
        //font-family: "DFSoGeiStd-W7";
        font-weight: bold;
        line-height: 16px;
      }
    }
  }
}
</style>
