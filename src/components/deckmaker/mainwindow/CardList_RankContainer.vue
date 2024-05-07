<template>
  <!-- Start: RankContainer -->
  <div class="cpsdm-cardList-rankContainer" v-if="cardList_filtered.length !== 0">
    <!-- Start: RankContainerHead -->
    <div class="cpsdm-cardList-rankContainer-head">
      <h4>{{this.$data.cardRank_String}}</h4>
      <button class="btn btn-primary cpsdm-cardList-rankContainer-toggleBtn" type="button" data-bs-toggle="collapse"
              :data-bs-target="'#rankContainer_Content_'+ CardProperties.Rank[this.cardRank] +'_Container'"
              aria-expanded="false"
              :aria-controls="'rankContainer_Content_'+CardProperties.Rank[this.cardRank]+'_Container'">
        <i class="fas fa-caret-down fs-3 iconBtn"></i>
      </button>
    </div>
    <!-- End: RankContainerHead -->
    <div :id="'rankContainer_Content_'+ CardProperties.Rank[this.cardRank] +'_Container'" class="cpsdm-cardList-container collapse collapsed show">
      <div :id="'rankContainer_Content_' + CardProperties.Rank[this.cardRank]" class="cpsdm-cardList-rankContainer-content">
        <ul class="list-group cpsdm-cardList-container-list">
          <CardList_CardItem v-for="card in cardList_filtered" :key="card" :card_user="card" />
        </ul>
      </div>
    </div>
  </div><!-- End: RankContainer -->
</template>
<style scoped lang="scss">
.cpsdm-cardList-rankContainer {
  width: calc(100% - 20px);
  margin: 10px;

  .cpsdm-cardList-rankContainer-head {
    width: calc(100% - 20px);
    margin: 0 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #888;

    .cpsdm-cardList-rankContainer-toggleBtn {
      background: none !important;
      border: none !important;
      color: #000 !important;
      outline: none;
      box-shadow: none !important;
    }
  }
  .cpsdm-cardList-container {
    width: 100%;
    margin: 10px;

    .cpsdm-cardList-container-list {
      width: calc(100% - 20px);
      border: none;
      list-style: none;
      border-radius: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: flex-start;
      justify-content: flex-start;
    }
  }
}
</style>
<script lang="ts">
import CardList_CardItem from "@/components/deckmaker/mainwindow/CardList_CardItem.vue";
import {User} from "@/script/cpsdm/model/User";
import CardProperties from "@/script/cpsdm/model/CardProperties";
import Rank = CardProperties.Rank;

export default {
  computed: {
    CardProperties() {
      return CardProperties
    }
  },
  components: {CardList_CardItem},
  props: {
    key: 0 as number,
    cardList: [] as User.CardStatus[],
    cardRank: Rank
  },
  data() {
    return {
      cardList_filtered: [],
      cardRank_String: Rank[this.cardRank]
    }
  },
  beforeMount() {
    this.cardList_filtered = this.cardList.filter(card => card.card.Rank === this.cardRank)
    // Card Rank String
    switch (this.cardRank) {
      case Rank.EVENT:
        this.cardRank_String = 'コラボで入手可能'
        break;
      case Rank.SEASON:
        this.cardRank_String = 'シーズンカード'
        break;
      case Rank.SUGGEST:
        this.cardRank_String = '推測されてるカード(不確定)'
        break;
      default:
        this.cardRank_String = Rank[this.cardRank] + 'ランクより入手可能'
        break;
    }
  }
}
</script>
