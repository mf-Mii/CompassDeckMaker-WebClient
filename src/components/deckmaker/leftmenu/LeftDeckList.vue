<template>
  <!-- .editingはここに(v-ifで後に置換) -->
  <div id="deckList">
    <!-- Start: デッキ一覧 -->
    <ul class="list-group">
      <!-- Start: デッキ -->
      <li class="list-group-item deckList-item active" v-for="deck in deckList">
        <!-- Start: 中身 -->
        <div class="deckList-itemContent">
          <img class="deckList-itemIcon" src="http://cpsdm-assets.local.mfmii.work/img/hero/radius/o01.webp"><!-- Start: 名前入力 -->
          <input type="text" class="deckList-nameInput"><!-- End: 名前入力 -->
          <!-- Start: 名前確定 -->
          <button class="btn deckList-nameEnter" type="submit"><i class="fas fa-check"></i></button><!-- End: 名前確定 -->
          <!-- Start: 操作ボタン -->
          <div class="deckList-buttons">
            <i class="far fa-trash-alt float-end deckList-deleteBtn deckList-button"></i>
            <i class="fas fa-pen float-end deckList-editBtn deckList-button"></i>
          </div><!-- End: 操作ボタン -->
          <span class="deckList-name">{{deck.name}}</span>
        </div><!-- End: 中身 -->
        <!-- Start: 選択アニメーション -->
        <div class="deckList-activeAnimation"><span>選択中</span><span>選択中</span><span>選択中</span><span>選択中</span><span>選択中</span><span>選択中</span><span>選択中</span><span>選択中</span></div><!-- End: 選択アニメーション -->
      </li><!-- End: デッキ -->
    </ul><!-- End: デッキ一覧 -->
  </div>
</template>
<style scoped lang="scss">
#deckList {
  height: calc(100% - 101px);
  user-select: none;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
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
  ul > li {

    &.deckList-item {
      background: repeating-linear-gradient(-45deg, #fff, #fff 4px, #ccc 0, #ccc 6px);
      color: black;
      border: none;
      border-radius: 0;
      overflow: hidden;
      position: relative;
      // 中身
      div.deckList-itemContent {
        height: 30px;
        line-height: 30px;
        user-select: none;
        img.deckList-itemIcon {
          transform: translateY(-12px);
          width: 48px;
        }
        .deckList-name {
          font-size: 20px;
          vertical-align: top;
        }
        // デッキ名入力(編集用)
        .deckList-nameInput {
          border: none;
          border-bottom: 1px solid #333;
          display: none;
          background: none;
          outline: none;
          vertical-align: top;
          line-height: 30px;
          height: 28px;
        }
        .deckList-nameEnter {
          padding: 0;
          position: relative;
          bottom: 8px;
          border: none;
          color: #555;
          display: none;
        }

        .deckList-buttons {
          position: absolute;
          bottom: 10px;
          right: 0;
          display: none;
          .deckList-button {
            margin: 0 5px;
            color: #444;
            height: 20px;
            width: 20px;
            cursor: pointer;
          }
        }
      }
      // Active Animation
      .deckList-activeAnimation {
        position: absolute;
        height: 8px;
        font-size: 10px;
        background: black;
        color: white;
        width: 300%;
        left: 0;
        display: none;
        overflow: hidden;

        > span {
          animation: deckActiveScroll 4s linear infinite;
          display: inline-block;
          padding-right: 60px;
        }
      }
      &.active {
        border-left: 5px solid var(--cps-theme);
        .deckList-activeAnimation {
          display: block;
        }
      }
    }
  }
  &.editMode {
    .deckList-item .deckList-buttons {
      display: inline-block;
    }
  }
}

@keyframes deckActiveScroll {
  0% {
    transform: translate(0, -2px);
  }

  100% {
    transform: translate(-500%, -2px);
  }
}
</style>
<script>
export default {
  props: {
    deckList: Array
  },
}
</script>
