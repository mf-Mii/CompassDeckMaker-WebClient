<script setup>

import RightDeck_TotalStatus from "@/components/deckmaker/right_frame/deck/RightDeck_TotalStatus.vue";
import RightDeck_Card from "@/components/deckmaker/right_frame/deck/RightDeck_Card.vue";
</script>

<template>
  <div id="deckBox">
    <div id="deckBox-Title">
      <h2>DECK</h2><button class="btn btn-danger" type="button">フリバモード</button>
    </div>
    <div id="deckBox-Cards">
      <ul>
        <RightDeck_Card />
        <RightDeck_Card />
        <RightDeck_Card />
        <RightDeck_Card />
      </ul>
    </div>
    <RightDeck_TotalStatus />
  </div>
</template>

<style scoped lang="scss">
#deckBox {
  width: calc(100% - 20px);
  margin: 20px 10px;

  #deckBox-Title {
    border-bottom: 2px solid #000;

    > {
      h2 {
        display: inline-block;
        margin: 0;
      }

      button {
        margin: 0;
        vertical-align: text-bottom;
        float: right;
        padding-top: 3px;
        padding-bottom: 3px;
      }
    }
  }


  #deckBox-Cards {
    margin: 10px 0;
    > ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;

    }
  }
}
</style>
