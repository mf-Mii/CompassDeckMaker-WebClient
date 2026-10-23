<template>
  <ModalsContainer />
  <main class="d-flex d-xxl-flex justify-content-start justify-content-xxl-start">
    <div id="leftmenu">
      <LeftDeckMenu :deck-list="$data.decks" />
    </div>
    <div id="mainWindow">
      <MainWindow_Header />
      <div class="x-line"></div>
      <div id="cardList_Main">
        <CardList_RankContainer :card-rank="CardProperties.Rank.F" :card-list="$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.E" :card-list="$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.D" :card-list="$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.C" :card-list="$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.B" :card-list="$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.A" :card-list="$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.S" :card-list="$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.COLLABO" :card-list="$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.SEASON" :card-list="$data.card_list.filtered" />
        <CardList_RankContainer :card-rank="CardProperties.Rank.SUGGEST" :card-list="$data.card_list.filtered" />
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
<script lang="ts">
import LeftDeckMenu from "@/components/deckmaker/leftmenu/LeftDeckMenu.vue";
import LeftDeckList from "@/components/deckmaker/leftmenu/LeftDeckList.vue";
import CardManager from "@/lib/cpsdm/controller/CardManager";
import MainWindow_Header from "@/components/deckmaker/mainwindow/MainWindow_Header.vue";
import CardList_RankContainer from "@/components/deckmaker/mainwindow/CardList_RankContainer.vue";
import CardProperties from "@/lib/cpsdm/model/CardProperties.js";
import RightFrame from "@/components/deckmaker/right_frame/RightFrame.vue";
import ModalsContainer from "@/components/deckmaker/modals/ModalsContainer.vue";

export default {
  computed: {
    CardProperties() {
      return CardProperties
    }
  },
  components: {
    ModalsContainer,
    RightFrame,
    CardList_RankContainer,
    MainWindow_Header,
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
