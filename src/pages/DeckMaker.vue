<script setup>
import CardList_RankContainer from "@/components/deckmaker/mainwindow/CardList_RankContainer.vue";
import CardProperties from "@/script/cpsdm/model/CardProperties";
import MainWindow_Header from "@/components/deckmaker/mainwindow/MainWindow_Header.vue";
import RightFrame from "@/components/deckmaker/right_frame/RightFrame.vue";
</script>
<template>
  <main class="d-flex d-xxl-flex justify-content-start justify-content-xxl-start">
    <div id="leftmenu">
      <LeftDeckMenu :deck-list="this.$data.decks" />
    </div>
    <div id="mainWindow">
      <MainWindow_Header />
      <div class="x-line"></div>
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
    <RightFrame />
  </main>
</template>

<style scoped lang="scss">
main {
  height: calc(100% - 100px);
  z-index: 100;

  #leftmenu {
    height: 100%;
    width: 20%;
    max-width: 300px;
    border-right: 1px solid #444;
  }

  #mainWindow {
    height: 100%;
    flex: 1;

    #cardList_Main {
      height: calc(100vh - 167px);
      overflow-y: scroll;
    }
  }
}
</style>
<script>
import LeftDeckMenu from "@/components/deckmaker/leftmenu/LeftDeckMenu.vue";
import LeftDeckList from "@/components/deckmaker/leftmenu/LeftDeckList.vue";
import CardManager from "@/script/cpsdm/controller/CardManager";

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
