<script setup>

</script>

<template>

  <div class="d-flex d-xxl-flex justify-content-between align-items-end" id="cardList_Header">
    <h2>カード一覧</h2>
    <div id="cardList_Header_SearchForm">
      <button class="btn btn-primary" id="cardList_Header_SF_filterBtn" type="button"><i class="fas fa-filter"></i>フィルター</button>
      <input type="search" id="cardList_Header_SF_searchBox" placeholder="カードを検索(略称可)"><!-- Start: switch -->
      <div id="cardList_Header_SF_detailSwitch" class="form-check form-switch">
        <div class="form-check"><input class="form-check-input" type="checkbox" id="CardList_ShowDetail_Switch" name="CardList_ShowDetail_Switch"><label class="form-check-label" for="CardList_ShowDetail_Switch">詳細表示</label></div>
      </div><!-- End: switch -->
    </div>
  </div>
</template>

<style scoped lang="scss">
#cardList_Header {
  margin: 10px 5px;
  h2 {
    display: inline-block;
    margin-bottom: 0;
    width: 150px;
  }

  #cardList_Header_SearchForm {

    #cardList_Header_SF_filterBtn {
      border-top: 0;
      border-bottom: 0;
      font-size: 14px;
      margin: auto 10px;
    }

    #cardList_Header_SF_searchBox {
      outline: none;
      border: none;
      border-bottom: 1px solid #888;
      transition: .3s;

      &:focus {
        border-bottom: 1px solid #333;
      }
    }

    #cardList_Header_SF_detailSwitch {
      display: inline-block;
    }
  }
}
</style>
