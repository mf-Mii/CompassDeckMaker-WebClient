<template>

  <!-- Start: RightContainer -->
  <div class="hero-info-container-right">
    <!-- Start: HeroStatus -->
    <ul class="heroInfoContainer-StatusBox">
      <HeroStatusBar_WithLabel type="atk" :value="1.0" :dark="true" />
      <HeroStatusBar_WithLabel type="def" :value="1.0" :dark="true" />
      <HeroStatusBar_WithLabel type="phy" :value="1.0" :dark="true" />
    </ul>
    <!-- End: HeroStatus -->
    <!-- Start: MoreStatus -->
    <div class="heroInfoContainer-moreStatusBox">
      <div class="status" data-cpsdm-herostatus="len"><span class="status_lbl">射程:</span></div>
      <div class="status" data-cpsdm-herostatus="spd"><span class="status_lbl">移動速度:</span></div>
    </div>
    <!-- End: MoreStatus -->
    <!-- Start: MoreStatus -->
    <div class="heroInfoContainer-moreStatusBox">
      <div class="status status_atkspd" data-cpsdm-herostatus="atkSpd"><span class="status_lbl">通常攻撃速度:</span>
        <div class="atkspd_res"><span class="atkspd_val">00.00秒</span><span class="atkspd_afterVal">(硬直00.00秒)</span><span>/</span></div>
        <div class="atkspd_input"><input class="form-control-sm atkspd_num" type="number" min="1" value="1"><span class="atkspd_unit">段目</span></div>
      </div>
    </div>
    <!-- End: MoreStatus -->
    <!-- Start: HeroFeatures(HA,HS,Ab) -->
    <div class="hero_features">
      <ModalHero_Right_HeroFeature type="hs" :title="'がとりんMKⅡ せっち'" text='設置型ガトリングで敵を自動攻撃(最大2機まで)'
                                   :subtext="'タメ時間: 約9秒&nbsp; |&nbsp; 無敵時間: 約2.9秒(初回のみ約7.0秒)\n射程: 無限 | 攻撃倍率: 約×0.88&nbsp; |&nbsp; 設置時間: 36秒'"/>
      <ModalHero_Right_HeroFeature type="ha" :title="'回転式機関銃攻撃'" text='FPS視点でガトリング攻撃' :subtext="'タメ: 0.33秒, 限界射程: 7ﾏｽ, 攻撃間隔: 0.16秒\n攻撃量: 71.5%(距離減衰)'"/>
      <ModalHero_Right_HeroFeature type="ab" :title="'デンジャラス ハイテンション'" text="敵にダメージを与えるたびにHSゲージ回復" subtext="1ﾀﾞﾒ=1.25%(1/80) | 2ﾀﾞﾒ以上=3%(1/34)"/>
    </div>
    <!-- End: HeroFeatures(HA,HS,Ab) -->
    <!-- Start: NockBacks -->
    <div class="nockbacks">
      <!-- Start: NockBack -->
      <div class="nockback"><span class="title">プッシュ量(水平)</span><img class="val" src="http://127.0.0.1:4174/img/icons/nb_rep_s.png"></div><!-- End: NockBack -->
      <!-- Start: NockBack -->
      <div class="nockback"><span class="title">ランチ量(放物線)</span><img class="val" src="http://127.0.0.1:4174/img/icons/nb_rep_s.png"></div><!-- End: NockBack -->
      <!-- Start: NockBack -->
      <div class="nockback"><span class="title">ブラスト量(垂直)</span><img class="val" src="http://127.0.0.1:4174/img/icons/nb_rep_s.png"></div><!-- End: NockBack -->
    </div><!-- End: NockBacks -->
    <!-- Start: CardTimes -->
    <div class="card-times">
      <!-- Start: Title --><span class="title">カード発動時間</span><!-- End: Title -->
      <!-- Start: Times1 -->
      <div class="time1_container">
        <div class="time1_item"><span class="label">無</span>
          <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span></div>
        </div>
        <div class="time1_item"><span class="label">短</span>
          <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span></div>
        </div>
        <div class="time1_item"><span class="label">長</span>
          <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span></div>
        </div>
      </div><!-- End: Times1 -->
      <!-- Start: Times2 -->
      <div class="time2_container">
        <!-- Start: Group -->
        <div class="time2_group">
          <!-- Start: Item -->
          <div class="time2_item"><img class="label_image" src="http://127.0.0.1:4174/img/icons/card_kin.jpg">
            <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span></div>
          </div><!-- End: Item -->
          <!-- Start: Item -->
          <div class="time2_item"><img class="label_image" src="http://127.0.0.1:4174/img/icons/card_kin.jpg">
            <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span></div>
          </div><!-- End: Item -->
        </div><!-- End: Group -->
        <!-- Start: Group -->
        <div class="time2_group">
          <!-- Start: Item -->
          <div class="time2_item"><img class="label_image" src="http://127.0.0.1:4174/img/icons/card_kin.jpg">
            <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span></div>
          </div><!-- End: Item -->
          <!-- Start: Item -->
          <div class="time2_item"><img class="label_image" src="http://127.0.0.1:4174/img/icons/card_kin.jpg">
            <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span></div>
          </div><!-- End: Item -->
        </div><!-- End: Group -->
        <!-- Start: Group -->
        <div class="time2_group">
          <!-- Start: Item -->
          <div class="time2_item"><img class="label_image" src="http://127.0.0.1:4174/img/icons/card_kin.jpg"><img class="label_image" src="http://127.0.0.1:4174/img/icons/card_kin.jpg">
            <div class="value_group"><span class="before">発動: <strong>0.00</strong></span><span class="after">硬直: <strong>0.00</strong></span></div>
          </div><!-- End: Item -->
        </div><!-- End: Group -->
      </div><!-- End: Times2 -->
    </div><!-- End: CardTimes -->
  </div>
  <!-- End: RightContainer -->
</template>

<style scoped lang="scss">
.hero-info-container-right {
  flex-basis: 55%;
  .heroInfoContainer-StatusBox {
    list-style: none;
    margin: 0 auto 0 0;
    padding: 0;
    width: 90%;
    position: relative;

    /*
      .heroStatus-status {
        text-align: right;

        > span {
          font-weight: bold;
          line-height: 22px;
          vertical-align: top;

          &::before {
            content: " ";
            display: inline-block;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            width: 22px;
            height: 22px;
            vertical-align: middle;
          }
        }

        &[data-cpsdm-herostatus="atk"] > span::before {
          background-image: url(http://127.0.0.1:4174/img/icons/stat_attack_w.png);
        }

        &[data-cpsdm-herostatus="def"] > span::before {
          background-image: url(http://127.0.0.1:4174/img/icons/stat_defence_w.png);
        }

        &[data-cpsdm-herostatus="phy"] > span::before {
          background-image: url(http://127.0.0.1:4174/img/icons/stat_physical_w.png);
        }

        .heroStatus-BarBox {
          display: inline-block;
          border: 2px solid #999;
          width: calc(100% - 80px);
          height: 22px;
          background: #444;
          font-size: 0;
          text-align: left;
          margin-left: 10px;

          .heroStatus-BarBox-text {
            position: absolute;
            right: 0;
            transform: translate(-30px, 0px);
            display: inline-block;
            font-size: 16px;
            line-height: 16px;
            color: #fff;
            z-index: 110;
            font-weight: bold;
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
     */
    }

  .heroInfoContainer-moreStatusBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 3px 0;
    .status {
      display: block;
      flex: 1;
      font-weight: bold;
      font-size: 16px;
      > span::before {
        content: " ";
        display: inline-block;
        background-size: cover;
        background-position: center;
        width: 22px;
        height: 22px;
        vertical-align: middle;
        line-height: 22px;
      }
      &[data-cpsdm-herostatus="spd"] > span.status_lbl::before {
        background-image: url(http://127.0.0.1:4174/img/icons/herostat_spd_w.png);
      }
      &[data-cpsdm-herostatus="len"] > span.status_lbl::before {
        background-image: url(http://127.0.0.1:4174/img/icons/herostat_len_w.png);
      }
      &[data-cpsdm-herostatus="atkSpd"] > span.status_lbl::before {
        background-image: url(http://127.0.0.1:4174/img/icons/herostat_atkSpd_w.png);
      }

      &.status_atkspd {
        > * {
          display: inline;
        }
        .atkspd_res {
          margin-left: 5px;
          font-weight: normal;
        }
        .atkspd_input {
          > input.atkspd_num {
            width: 50px;
            line-height: 16px;
          }
          > .atkspd_unit {
            font-weight: normal;
            font-size: 12px;
          }
        }
      }
    }
  }
  .hero_features {
    display: flex;
    flex-direction: column;
    .hero_feature {
      width: 100%;
      padding: 0 10px 3px 10px;
      margin: 3px 0;
      background: #ddd;
      .title {
        .head {
          width: 60px;
          background: #333;
          line-height: 16px;
          font-size: 14px;
          clip-path: polygon(0 0, 90% 0%, 100% 50%, 90% 100%, 0 100%);
          display: inline-block;
          margin-right: 10px;
        }
        .content {
          color: #333;
          font-size: 18px;
          font-weight: bold;
        }
        border-bottom: 1px solid #666;
      }
      .description {
        .main {
          color: #333;
          font-weight: bold;
        }
        .val {
          color: #333;
        }
        color: #666;
        font-size: 14px;
        margin-bottom: 0;
      }
    }
  }
  .nockbacks {
    display: flex;
    flex-direction: row;
    margin: 5px 0;
    .nockback {
      flex: 1;
      margin: 0 5px;
      background: #ddd;
      height: 60px;
      text-align: center;
      .title {
        color: #333;
        display: block;
        font-size: 14px;
      }
      img.val {
        height: 60%;
        margin: 0 auto;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .card-times {
    display: block;
    width: 100%;
    .title {
      display: block;
      width: 100%;
      text-align: center;
      background: #888;
      line-height: 20px;
      font-size: 18px;
      border: 1px solid #ddd;
    }
    .time1_container {
      display: flex;
      width: 100%;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-top: 5px;
      border-bottom: 1px solid #888;
      .time1_item {
        flex: 1;
        display: flex;
        flex-direction: row;
        font-size: 20px;
        //font-family: "DFSoGeiStd-W7", sans-serif;
        .label {
          border-right: 2px solid #eee;
          height: 100%;
          display: block;
          padding-right: 5px;
        }
        .value_group {
          margin-left: 5px;
          display: flex;
          flex-direction: column;
          font-size: 16px;
          > span {
            display: block;
            > strong {
              font-size: 22px;
            }
          }
        }
      }
    }
    .time2_container {
      display: flex;
      flex-direction: column;
      .time2_group {
        display: flex;
        flex-direction: row;
        width: 100%;
        .time2_item {
          display: flex;
          flex-direction: row;
          flex: 1;
          justify-content: center;
          text-align: center;
          vertical-align: middle;
          align-items: center;
          margin: 5px;
          .label_image {
            height: 40px;
            margin: 0 5px;
          }
          .value_group {
            display: flex;
            flex-direction: column;
            > span {
              display: block;
              text-align: left;
              font-size: 16px;
              line-height: 20px;
              > strong {
                font-size: 26px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<script lang="ts">

import {defineComponent} from "vue";
import ModalHero_LeftContainer from "@/components/deckmaker/modals/hero/ModalHero_LeftContainer.vue";
import HeroStatusBar_WithLabel from "@/components/deckmaker/HeroStatusBar_WithLabel.vue";
import ModalHero_Right_HeroFeature from "@/components/deckmaker/modals/hero/ModalHero_Right_HeroFeature.vue";

export default defineComponent({
  components: {ModalHero_Right_HeroFeature, HeroStatusBar_WithLabel, ModalHero_LeftContainer}
})


defineComponent({
  name: "ModalHero_RightContainer",
  setup() {
    return {

    }
  }
})
</script>
