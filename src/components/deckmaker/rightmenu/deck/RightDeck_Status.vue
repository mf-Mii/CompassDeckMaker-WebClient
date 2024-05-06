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
