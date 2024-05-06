<script setup>

import '@/assets/css/deck-maker.scss';
</script>

<template>
  <div id="deckList">
    <!-- Start: デッキ一覧 -->
    <ul class="list-group">
      <!-- Start: デッキ -->
      <li class="list-group-item deckList-item active" v-for="deck in deckList">
        <!-- Start: 中身 -->
        <div class="deckList-itemContent">
          <img class="deckList-itemIcon" src="http://cpsdm-assets.local.mfmii.work/img/hero/radius/cq.webp"><!-- Start: 名前入力 -->
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
<script>
export default {
  props: {
    deckList: Array
  },
}
</script>
