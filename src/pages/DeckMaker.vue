<script setup>
import '@/assets/css/deck-maker.scss';
import LeftDeckList from "@/components/deckmaker/leftmenu/LeftDeckList.vue";
import LeftDeckMenu from "@/components/deckmaker/leftmenu/LeftDeckMenu.vue";
import CardList_RankContainer from "@/components/deckmaker/mainwindow/CardList_RankContainer.vue";
import CardProperties from "@/script/cpsdm/model/CardProperties";
import MainWindow_Header from "@/components/deckmaker/mainwindow/MainWindow_Header.vue";
import RightDeck_TotalStatus from "@/components/deckmaker/rightmenu/deck/RightDeck_TotalStatus.vue";
</script>
<template>
  <main class="d-flex d-xxl-flex justify-content-start justify-content-xxl-start">
    <div id="leftmenu">
      <LeftDeckMenu :deck-list="this.$data.decks" />
    </div>
    <div id="mainWindow">
      <MainWindow_Header />
      <!-- Start: Line -->
      <div class="x-line"></div><!-- End: Line -->
      <div id="cardList_Main">
        <CardList_RankContainer :card-rank="CardProperties.Rank.F" :card-list="this.$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.E" :card-list="this.$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.D" :card-list="this.$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.C" :card-list="this.$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.B" :card-list="this.$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.A" :card-list="this.$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.S" :card-list="this.$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.EVENT" :card-list="this.$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.SEASON" :card-list="this.$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.SUGGEST" :card-list="this.$data.card_list.filtered" />
      </div>
    </div>
    <div id="rightwindow">
      <div id="deckBox">
        <div id="deckBox-Title">
          <h2>DECK</h2><button class="btn btn-danger" type="button">フリバモード</button>
        </div>
        <div id="deckBox-Cards">
          <ul>
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
                <div class="deckBox-card-detail-info"><span>発:&nbsp;無</span><span>CT:999</span></div>
              </div>
            </li>
            <li class="deckBox-card">
              <img src="http://cpsdm-assets.local.mfmii.work/img/card/normal/1.webp" width="100%">
              <div class="deckBox-card-detail">
                <!-- Start: LevelInput -->
                <div class="deckBox-card-detail-level"><span>Lv.&nbsp;</span><input type="number" class="deckBox-card-detail-level-input" min="1" max="60"></div><!-- End: LevelInput -->
                <div class="deckBox-card-detail-statusBox"><span class="deckBox-card-detail-statusBox-atk">999</span><span class="deckBox-card-detail-statusBox-def">999</span><span class="deckBox-card-detail-statusBox-phy">9999</span></div>
                <div class="deckBox-card-detail-info"><span>発: 無</span><span>CT:999</span></div>
              </div>
            </li>
            <li class="deckBox-card">
              <img src="http://cpsdm-assets.local.mfmii.work/img/card/normal/1.webp" width="100%">
              <div class="deckBox-card-detail">
                <!-- Start: LevelInput -->
                <div class="deckBox-card-detail-level"><span>Lv.&nbsp;</span><input type="number" class="deckBox-card-detail-level-input" min="1" max="60"></div><!-- End: LevelInput -->
                <div class="deckBox-card-detail-statusBox"><span class="deckBox-card-detail-statusBox-atk">999</span><span class="deckBox-card-detail-statusBox-def">999</span><span class="deckBox-card-detail-statusBox-phy">9999</span></div>
                <div class="deckBox-card-detail-info"><span>発: 無</span><span>CT:999</span></div>
              </div>
            </li>
            <li class="deckBox-card">
              <img src="http://cpsdm-assets.local.mfmii.work/img/card/normal/1.webp" width="100%">
              <div class="deckBox-card-detail">
                <!-- Start: LevelInput -->
                <div class="deckBox-card-detail-level"><span>Lv.&nbsp;</span><input type="number" class="deckBox-card-detail-level-input" min="1" max="60"></div><!-- End: LevelInput -->
                <div class="deckBox-card-detail-statusBox"><span class="deckBox-card-detail-statusBox-atk">999</span><span class="deckBox-card-detail-statusBox-def">999</span><span class="deckBox-card-detail-statusBox-phy">9999</span></div>
                <div class="deckBox-card-detail-info"><span>発: 無</span><span>CT:999</span></div>
              </div>
            </li>
          </ul>
        </div>
        <RightDeck_TotalStatus />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
</style>
<script>
import LeftDeckMenu from "@/components/deckmaker/leftmenu/LeftDeckMenu.vue";
import LeftDeckList from "@/components/deckmaker/leftmenu/LeftDeckList.vue";
import {User} from "@/script/cpsdm/model/User";
import CardManager from "@/script/cpsdm/controller/CardManager";
import {CardType} from "@/script/cpsdm/model/CardTypes";

export default {
  components: {
    LeftDeckList,
    LeftDeckMenu
  },
  data() {
    return {
      page: {
        deckListEditMode: false,
        showCardDetail: false,
        calcHeroStatus: false,
      },
      card_list: {
        all: [],
        filtered: [],
      },
      deckListEditMode: false,
      decks: [
        {
          name: 'デッキ1',
          hero: 1,
          cards: [
            {
              id: 1,
              level: 1
            },
            {
              id: 2,
              level: 1
            },
            {
              id: 3,
              level: 1
            },
            {
              id: 4,
              level: 1
            }
          ]
        }
      ],
      user: {
        id: 1,
        name: 'mf_Mii',
        code: 'C-JesK',
        friendCode: '0000000000000000',
        sns: {
          tw: '@JP_mf_Mii',
          discord: 'mf_Mii#0000'
        },
        message: 'よろしくお願いします！',
        icon: 'default.webp',
      },
      settings: {
        guide: false,
        auto_tweet: false,
        filter: {
          enabled: false,
          categories: [],
          rarity: [],
          rank: [],
        }
      }
    }
  },
  methods: {
    _onLoad() {
      // Load All Cards
      this.card_list.all = this.card_list.filtered = CardManager.get_all_as_userCards(null);
    }
  },
  beforeMount() {
    this._onLoad();
  }
}
</script>
