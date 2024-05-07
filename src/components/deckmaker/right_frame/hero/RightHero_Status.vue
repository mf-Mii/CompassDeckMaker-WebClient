<script setup>

</script>

<template>
  <li class="heroStatus-status" data-cpsdm-herostatus="atk">
    <span>攻撃</span>
    <div class="heroStatus-BarBox"><span class="heroStatus-BarBox-text">×1.0</span>
      <div class="heroStatus-BarBox-val"></div>
    </div>
  </li>
</template>

<style scoped lang="scss">
.heroStatus-status {
  text-align: right;
  color: #666;

  > span {
    font-weight: bold;
    line-height: 20px;
    vertical-align: top;

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
  }

  &[data-cpsdm-herostatus="atk"] > span::before {
    background-image: url(http://cpsdm-assets.local.mfmii.work/img/icons/stat_attack.png);
  }

  &[data-cpsdm-herostatus="def"] > span::before {
    background-image: url(http://cpsdm-assets.local.mfmii.work/img/icons/stat_defence.png);
  }

  &[data-cpsdm-herostatus="phy"] > span::before {
    background-image: url(http://cpsdm-assets.local.mfmii.work/img/icons/stat_physical.png);
  }

  .heroStatus-BarBox {
    display: inline-block;
    border: 2px solid #999;
    width: calc(100% - 80px);
    height: 20px;
    background: #444;
    font-size: 0;
    text-align: left;
    position: relative;

    .heroStatus-BarBox-text {
      position: absolute;
      transform: translate(100px, -4px);
      display: inline-block;
      font-size: 14px;
      color: #fff;
      z-index: 110;
    }

    .heroStatus-BarBox-val {
      display: inline-block;
      height: 100%;
      position: relative;
      width: 50%;
      background-color: #ee7a55;
      z-index: 100;
    }
  }
}
</style>
