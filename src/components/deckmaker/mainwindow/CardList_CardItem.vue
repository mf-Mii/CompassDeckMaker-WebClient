<script setup>
import CardProperties from "../../../script/cpsdm/model/CardProperties";

defineProps({
  card_user: User.CardStatus
})
</script>
<template>
  <li class="list-group-item cpsdm-cardList-container-list-item" :style="'background-image: url(http://cpsdm-assets.local.mfmii.work/img/card/normal/' + this.card_data.ID +'.webp);'" v-if="this.card_data !== undefined">
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

.cpsdm-cardList-container-list-item {
  width: 120px;
  height: 165px;
  margin: 5px;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 0;
  .cpsdm-cardList-cardDetail {
    height: 100%;
    width: 100%;
    display: block;
    text-align: center;
    background: #0005;
    padding: 5px 0;

    > * {
      display: block;
      color: #fff;
    }

    .cpsdm-cardList-cardDetail-name {
      line-height: 16px;
      display: block;
      font-weight: bold;
      font-size: 11px;
    }

    .cpsdm-cardList-cardDetail-status {
      width: 60%;
      display: block;
      text-align: center;
      font-size: var(--cpsdm-cardDetail-stat-size);
      margin: 10px 20px;
      > span {
        display: block;
        width: 100%;
        line-height: calc(var(--cpsdm-cardDetail-stat-size) - 2px);
        &::before {
          content: " ";
          display: inline-block;
          width: var(--cpsdm-cardDetail-stat-size);
          height: var(--cpsdm-cardDetail-stat-size);
          background-size: contain;
          background-position: center;
          margin-right: 16px;
        }
        &.cpsdm-cardList-cardDetail-status-atk::before {
          background-image: url(http://cpsdm-assets.local.mfmii.work/img/icons/stat_attack_w.png);
        }

        &.cpsdm-cardList-cardDetail-status-def::before {
          background-image: url(http://cpsdm-assets.local.mfmii.work/img/icons/stat_defence_w.png);
        }

        &.cpsdm-cardList-cardDetail-status-phy::before {
          background-image: url(http://cpsdm-assets.local.mfmii.work/img/icons/stat_physical_w.png);
        }
      }
    }
    .cpsdm-cardList-cardDetail-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 14px;
      text-align: center;
      justify-content: center;

      > span.pad {
        padding: 0 5px;
      }
    }
    .cpsdm-cardList-cardDetail-buttonBox {
      display: flex;
      justify-content: center;
      margin: 10px 0 0 0;
      .cpsdm-cardList-cardDetail-button {
        background: none;
        border: none;
        margin: 0 5px;
        border-radius: 0;
        padding: 0;
        transition: 0.2s;
        width: 36px;

        > {
          svg {
            position: relative;
            width: 36px;
            height: 36px;
          }

          span {
            display: block;
            width: 36px;
            height: 36px;
            line-height: 36px;
            opacity: 0;
            transition: 0.2s;
            position: absolute;
            text-align: center;
            color: #fff;
            filter: drop-shadow(0 0 3px #000);
          }
        }

        &:hover {
          background: none;

          > {
            svg {
              filter: blur(2px);
            }

            span {
              opacity: 1;
            }
          }
        }

        &:active {
          background: none !important;
        }
      }
    }
  }
}
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
