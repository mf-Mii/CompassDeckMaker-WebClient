<template>

  <div id="leftmenuHeader">
    <h4 class="d-inline">保存済みデッキ</h4>
    <div class="editBtn-container" @click="toggleDeckListEditMode">
      <i class="fas fa-times fs-3 text-black-50 float-end iconBtn d-none" data-bs-toggle="tooltip" data-bss-tooltip="" data-bs-placement="bottom" id="__LeftDecksEditModeOffBtn" title="デッキリスト編集を終了"></i>
      <i class="fas fa-cog fs-3 text-black-50 float-end iconBtn" data-bs-toggle="tooltip" data-bss-tooltip="" data-bs-placement="bottom" id="__LeftDecksEditModeOnBtn" title="デッキリストを編集"></i>
    </div>

  </div>
  <div class="x-line"></div>
  <LeftDeckList :deck-list="this.$props.deckList" />
  <div class="fs-5 text-center" id="addDeck">
    <span>追加</span><i class="fas fa-plus"></i>
  </div>
</template>

<style scoped lang="scss">
#leftmenuHeader {
  padding-top: 20px;
  padding-right: 5%;
  padding-left: 5%;
  margin: 0 auto 10px;
  .editBtn-container {
    display: inline;
  }
  .editing {
    .deckList-item {
      .deckList-nameInput {
        display: inline !important;
        width: calc(100% - 68px) !important;
      }
      .deckList-nameEnter {
        display: initial !important;
      }
      .deckList-buttons, .deckList-name {
        display: none !important;
      }
    }
  }
}

#addDeck {
  background: var(--cps-theme);
  color: white;
  user-select: none;
  cursor: pointer;
  padding: 5px 0;
  span {
    padding: 0 10px;
  }
}
</style>
<script>
import LeftDeckList from "@/components/deckmaker/leftmenu/LeftDeckList.vue";

export default {
  components: {
    LeftDeckList
  },
  props: {
    deckList: Array
  },
  data() {
    return {
      deckListEditMode: false,
    }
  },
  methods: {
    toggleDeckListEditMode() {
      console.log('toggleDeckListEditMode')
      this.deckListEditMode = !this.deckListEditMode
      // v-ifがバグの影響で使用不可なので、classで表示非表示を切り替える
      if (this.deckListEditMode) {
        document.getElementById('__LeftDecksEditModeOnBtn')?.classList.add('d-none')
        document.getElementById('__LeftDecksEditModeOffBtn')?.classList.remove('d-none')
      } else {
        document.getElementById('__LeftDecksEditModeOnBtn')?.classList.remove('d-none')
        document.getElementById('__LeftDecksEditModeOffBtn')?.classList.add('d-none')
      }
    }
  },
}
</script>
