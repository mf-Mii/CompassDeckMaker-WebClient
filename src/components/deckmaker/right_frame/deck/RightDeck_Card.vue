<script setup>

</script>

<template>

  <li class="deckBox-card">
    <img src="http://cpsdm-assets.local.mfmii.work/img/card/normal/1.webp" width="100%">
    <div class="deckBox-card-detail">
      <!-- Start: LevelInput -->
      <div class="deckBox-card-detail-level"><span>Lv.&nbsp;</span><input type="number" class="deckBox-card-detail-level-input" min="1" max="60"></div><!-- End: LevelInput -->
      <div class="deckBox-card-detail-statusBox">
        <span class="deckBox-card-detail-statusBox-atk">999</span>
        <span class="deckBox-card-detail-statusBox-def">999</span>
        <span class="deckBox-card-detail-statusBox-phy">9999</span>
      </div>
      <div class="deckBox-card-detail-info">
        <span>発:&nbsp;無</span>
        <span>CT:999</span>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">

.deckBox-card {
  width: 25%;
  > img {
    border: 1px solid #000a;
  }
  .deckBox-card-detail {
    background: #fff;
    border: 2px dotted;
    padding: 2px 1px;
    font-size: 0;


    .deckBox-card-detail-level {
      font-size: 16px;
      .deckBox-card-detail-level-input {
        width: 50px;
        height: 24px;
        outline: none;
      }
    }

    .deckBox-card-detail-statusBox {
      width: 50%;
      display: inline-block;
      > span {
        font-size: 14px;
        width: 100%;
        display: block;
        line-height: 14px;

        &::before {
          content: " ";
          display: inline-block;
          width: 12px;
          height: 12px;
          line-height: 12px;
          background-size: contain;
          background-position: center;
        }


        &.deckBox-card-detail-statusBox-atk::before {
          background-image: url(http://cpsdm-assets.local.mfmii.work/img/icons/stat_attack.png);
        }

        &.deckBox-card-detail-statusBox-def::before {
          background-image: url(http://cpsdm-assets.local.mfmii.work/img/icons/stat_defence.png);
        }

        &.deckBox-card-detail-statusBox-phy::before {
          background-image: url(http://cpsdm-assets.local.mfmii.work/img/icons/stat_physical.png);
        }
      }
    }
    .deckBox-card-detail-info {
      display: inline-block;
      font-size: 14px;
      margin-left: 5px;
      width: calc(50% - 5px);
    }
  }
}
</style>
