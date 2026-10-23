<script setup>

</script>

<template>
  <div class="page hero-features">
    <div class="hero_feature">
      <div class="title">
        <span class="head">ﾋｰﾛｰｽｷﾙ</span><span class="content">がとりんMKⅡ せっち</span>
      </div>
      <p class="description">
        <span class="main">設置型ガトリングで敵を自動攻撃(最大2機まで)</span><br>
        タメ時間: 約9秒&nbsp;|&nbsp; 無敵時間: 約2.9秒(初回のみ約7.0秒)<br>射程: 無限 | 攻撃倍率: 約×0.88&nbsp; |&nbsp; 設置時間: 36秒
      </p>
    </div>
    <div class="hero_feature">
      <div class="title">
        <span class="head">ｱｸｼｮﾝ</span><span class="content">回転式機関銃攻撃／ばっちーのショードク</span>
      </div>
      <p class="description">設置型ガトリングで敵を自動攻撃(最大2機まで)</p>
    </div>
    <div class="hero_feature">
      <div class="title">
        <span class="head">ｱﾋﾞﾘﾃｨ</span><span class="content">デンジャラス ハイテンション</span>
      </div>
      <p class="description">
        敵にダメージを与えるたびにHSゲージ回復<br>
        (1ﾀﾞﾒ=1/80, 2ﾀﾞﾒ以上=1/40)
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero-features {
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  .hero_feature {
    width: 100%;
    padding: 0px 10px 3px 10px;
    margin: 3px 0;
    background: #eee;

    .title {
      .head {
        width: 60px;
        background: #333;
        line-height: 16px;
        font-size: 14px;
        clip-path: polygon(0 0, 90% 0%, 100% 50%, 90% 100%, 0 100%);
        display: inline-block;
        margin-right: 10px;
        color: white;
      }

      .content {
        color: #333;
        font-size: 16px;
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
      font-size: 12px;
      margin-bottom: 0;
    }
  }
}
</style>
