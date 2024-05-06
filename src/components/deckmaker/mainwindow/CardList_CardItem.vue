<script setup>
import CardProperties from "../../../script/cpsdm/model/CardProperties";

defineProps({
  card_user: User.CardStatus
})
</script>
<template>
  <li class="list-group-item cpsdm-cardList-container-list-item" :style="'background-image: url(http://cpsdm-assets.local.mfmii.work/img/card/normal/' + this.card_data.ID +'.webp);'" v-if="this.card_data != undefined">
    <div class="cpsdm-cardList-cardDetail" data-cpsdm-cardid="1">
      <span class="cpsdm-cardList-cardDetail-name">{{this.card_data.Name}}</span>
      <div class="cpsdm-cardList-cardDetail-status">
        <span class="cpsdm-cardList-cardDetail-status-atk">{{this.calc_status.attack.toString().padStart(4, '&nbsp;')}}</span>
        <span class="cpsdm-cardList-cardDetail-status-def">{{this.calc_status.defense.toString().padStart(4, '&nbsp;')}}</span>
        <span class="cpsdm-cardList-cardDetail-status-phy">{{ this.calc_status.physical.toString().padStart(4, '&nbsp;') }}</span>
      </div>
      <div class="cpsdm-cardList-cardDetail-info">
        <span>CT:&nbsp;</span><span>{{this.card_data.CoolTime}}秒</span>
        <!-- Start: Padding --><span class="pad"></span><!-- End: Padding -->
        <span>発動:&nbsp;</span><span>{{ this.card_data.InvokeTime === CardProperties.InvokeTime.NONE ? '無' : this.card_data.InvokeTime === CardProperties.InvokeTime.SHORT ? '短': '長'}}</span>
      </div>
      <div class="cpsdm-cardList-cardDetail-buttonBox">
        <button class="btn btn-primary cpsdm-cardList-cardDetail-button" type="button">
          <span>詳細</span><IconInfo />
        </button>
        <button class="btn btn-primary cpsdm-cardList-cardDetail-button" type="button">
          <span>使用</span><IconChange />
        </button>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">

</style>
<script>
import IconInfo from "@/components/icons/IconInfo.vue";
import IconChange from "@/components/icons/IconChange.vue";
import {User} from "@/script/cpsdm/model/User";
import "@/script/cpsdm/controller/CardManager";

export default {
  components: {IconChange, IconInfo},
  props: {
    card_user: User.CardStatus
  },
  data() {
    return {
      card_data: undefined,
      calc_status: {
        attack: 0,
        defense: 0,
        physical: 0
      }
    }
  },
  methods: {
    load_cardData() {
      this.card_data = this.card_user.card;
      this.calc_status.attack = Math.round(this.card_data.Status.Attack + (this.card_user.level !== 0 ? (this.card_data.StatusLvUP.Attack * (this.card_user.level - 1)):0));
      this.calc_status.defense = Math.round(this.card_data.Status.Defense + (this.card_user.level !== 0 ? (this.card_data.StatusLvUP.Defense * (this.card_user.level - 1)):0));
      this.calc_status.physical = Math.round(this.card_data.Status.Physical + (this.card_user.level !== 0 ? (this.card_data.StatusLvUP.Physical * (this.card_user.level - 1)):0));
    }
  },
  computed: {
  },
  beforeMount() {
    this.load_cardData();
    //console.log(this.card_data)
  },
  beforeUpdate() {
    this.load_cardData();
  }
}
</script>
