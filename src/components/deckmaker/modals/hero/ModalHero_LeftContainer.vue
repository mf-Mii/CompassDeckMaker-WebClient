<template>
  <!-- Start: LeftContainer -->
  <div class="hero-info-container-left">
    <img src="http://127.0.0.1:4174/img/hero/fullbody/o19.png">
    <div class="infoBox">
      <span>ILLUST: ぽあろ</span>
      <span>CV: 天野 心愛&amp;中尾 隆聖</span>
      <span>Motion: 217</span>
      <span>Music:&nbsp;<a class="herosong-link" href="#">バイオレンストリガー</a>&nbsp;(八王子P)</span>
    </div>
    <p class="description">
      おませで危険な兵器マニアの少女<br>愛用の「ガトりん」で嗜虐の限りを尽くす
    </p>
    <div class="official_introduction">
      <table>
        <thead>
        <tr>
          <th>メグメグの特徴</th>
        </tr>
        </thead>
        <tbody>
        <!-- TODO: v-forで回す -->
        <tr>
          <td>目にもとまらぬ速さで撃ちまくるガンナーです。1発の威力は低く、防御力が高い敵は苦手です。</td>
        </tr>
        <tr>
          <td>攻撃的なヒーローアクションとアビリティで、積極的に戦いたい人に向いていますよ。</td>
        </tr>
        <tr>
          <td>ヒーロースキルは、射程が無限の設置型ガトリングです。1試合に複数置くことも可能ですよ。</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- End: LeftContainer -->
</template>

<style scoped lang="scss">
.hero-info-container-left {
  flex-basis: 45%;
  img {
    width: 80%;
    margin: 0 auto;
    display: block;
  }
  .infoBox {
    width: 100%;
    font-size: 20px;
    line-height: 22px;
    margin-top: 10px;
    > span {
      display: block;
    }
  }
  .description {
    margin: 20px auto;
    text-align: center;
  }
  .official_introduction {
    table {
      border-spacing: 0;
      border-collapse: separate;
      border-radius: 6px;
      border: 2px solid #aaa;
      width: 100%;
      margin: 0 auto;
      thead tr th {
        text-align: center;
        border-bottom: 1px solid #aaa;
        background: #281a14;
        border-radius: 6px 6px 0 0;
      }
      tbody {
        tr {
          background: #3f3f3f;
          font-size: 12px;
          td {
            padding: 0 4px;
            border-bottom: 1px solid #aaa;
          }
          &:last-child td {
            border-bottom: none;
            border-radius: 0 0 6px 6px;
          }
        }
      }
    }
  }
}
</style>
<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: "ModalHero_LeftContainer",
  props: {
    hero: {
      type: Object,
      required: true
    }
  }
})
</script>
