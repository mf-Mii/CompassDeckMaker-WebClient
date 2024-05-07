<script setup>

</script>

<template>
  <li class="deckBox-TotalStatus-status" :data-cpsdm-totalstatus="this.type"><span>{{ this.type_str }}</span>
    <div class="deckBox-TotalStatus-status-barBox">
      <div class="deckBox-TotalStatus-status-barBox-text">
        <span class="deckBox-TotalStatus-status-barBox-text-normal" ref="txt_n">{{this.value}}</span>
        <span class="deckBox-TotalStatus-status-barBox-text-plus" ref="txt_p"></span>
        <span class="deckBox-TotalStatus-status-barBox-text-minus" ref="txt_m"></span>
        =
        <span class="deckBox-TotalStatus-status-barBox-text-total" ref="txt_t">{{this.calc_value}}</span>
      </div>
      <div class="deckBox-TotalStatus-status-barBox-val" ref="bar_n"></div>
      <div class="deckBox-TotalStatus-status-barBox-val-plus" ref="bar_p"></div>
      <div class="deckBox-TotalStatus-status-barBox-val-minus" ref="bar_m"></div>
    </div>
  </li>
</template>

<style scoped lang="scss">
.deckBox-TotalStatus-status {
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

  &[data-cpsdm-totalstatus="atk"] > span::before {
    background-image: url(http://cpsdm-assets.local.mfmii.work/img/icons/stat_attack.png);
  }

  &[data-cpsdm-totalstatus="def"] > span::before {
    background-image: url(http://cpsdm-assets.local.mfmii.work/img/icons/stat_defence.png);
  }

  &[data-cpsdm-totalstatus="phy"] > span::before {
    background-image: url(http://cpsdm-assets.local.mfmii.work/img/icons/stat_physical.png);
  }

  .deckBox-TotalStatus-status-barBox {
    display: inline-block;
    border: 2px solid #999;
    width: calc(100% - 80px);
    height: 20px;
    margin-left: 20px;
    background: #444;
    font-size: 0;
    position: relative;


    .deckBox-TotalStatus-status-barBox-text {
      position: absolute;
      transform: translate(120px, -4px);
      display: inline-block;
      font-size: 14px;
      color: #fff;
      z-index: 110;
      font-weight: bold;

      .deckBox-TotalStatus-status-barBox-text-normal {
        font-weight: normal;
      }

      .deckBox-TotalStatus-status-barBox-text-plus {
        color: #6371cc;
      }

      .deckBox-TotalStatus-status-barBox-text-minus {
        color: #f00;
      }

      .deckBox-TotalStatus-status-barBox-text-total {
        text-decoration: underline;
      }
    }

    .deckBox-TotalStatus-status-barBox-val {
      display: inline-block;
      height: 100%;
      position: relative;
      width: 0;
      //width: 50%;
      background-color: #ce5;
      z-index: 100;
    }

    .deckBox-TotalStatus-status-barBox-val-plus {
      display: inline-block;
      height: 100%;
      position: relative;
      width: 0;
      //width: 17%;
      background-color: #0fbb0f;
      z-index: 100;
    }

    .deckBox-TotalStatus-status-barBox-val-minus {
      display: inline-block;
      height: 100%;
      position: relative;
      width: 0;
      //width: 7%;
      background-color: #f80;
      //left: -7%;
      z-index: 100;
    }
  }
}
</style>
<script>
export default {
  props: {
    type: String,
    value: Number,
    calc_value: -1
  },
  data() {
    let type_str = this.type;
    let status_max = 0;
    switch (this.type) {
      // 最大値はコンパスアプリの比率に寄せてるため、無駄が発生してる
      case 'atk':
        type_str = '攻撃';
        // 最大値3134(推定)
        status_max = 4400;
        break;
      case 'def':
        type_str = '防御';
        // 最大値2179(推定)
        status_max = 2200;
        break;
      case 'phy':
        type_str = '体力';
        // 最大値20389(推定)
        status_max = 21000;
        break;
    }
    return {
      type_str: type_str,
      status_max: status_max
    }
  },
  methods: {
    update_bar: function () {
      this.$refs.bar_p.style.width = '0%';
      this.$refs.bar_m.style.width = '0%';
      this.$refs.bar_n.style.width = (this.value / this.status_max)*100 + '%';
      if (this.calc_value === -1) return;
      if (this.value > this.calc_value) {
        console.log("補正倍率1.0以下のステータスバー表示")
        // 補正倍率1.0以下
        console.log(((this.value - this.calc_value) / this.status_max)*100 + '%' , -((this.value - this.calc_value) / this.status_max)*100 + '%')
        this.$refs.bar_m.style.width = ((this.value - this.calc_value) / this.status_max)*100 + '%';
        this.$refs.bar_m.style.left = -((this.value - this.calc_value) / this.status_max)*100 + '%';
      } else if (this.value < this.calc_value) {
        console.log("補正倍率1.0以上のステータスバー表示")
        console.log(((this.calc_value - this.value) / this.status_max)*100 + '%');
        this.$refs.bar_p.style.width = ((this.calc_value - this.value) / this.status_max)*100 + '%';
      }
    },
    update_text: function () {
      this.$refs.txt_m.innerText = '';
      this.$refs.txt_p.innerText = '';
      this.$refs.txt_n.innerText = this.value.toString();
      if (this.calc_value === -1) return;
      if (this.value > this.calc_value) {
        // 補正倍率1.0以下
        this.$refs.txt_m.innerText = '(-'+(this.value - this.calc_value).toString()+')';
      } else if (this.value < this.calc_value) {
        // 補正倍率1.0以上
        this.$refs.txt_p.innerText = '(+'+(this.calc_value - this.value).toString()+')';
      }
    }
  },
  computed: {

  },
  beforeMount() {
  },
  mounted() {
    this.update_bar();
    this.update_text();
  },
  beforeUpdate() {
    this.update_bar();
    this.update_text();
  }
}
</script>
