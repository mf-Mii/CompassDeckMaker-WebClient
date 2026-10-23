<script setup>

</script>

<template>
  <div id="heroInfo-cont-summary">
    <button class="hero-selectable-btn" type="button" data-bs-target="#modal-HeroSelect" data-bs-toggle="modal">
      <img class="heroIcon">
      <span class="heroChange">▲タップして変更</span>
    </button>
    <span class="heroNick">メグメグ</span>
  </div>
</template>

<style scoped lang="scss">

// Left Area
#heroInfo-cont-summary {
  width: 100px;
  > .hero-selectable-btn {
    border: none;
    margin: 0;
    background: none;
    padding: 0;
    > img {
      width: 100px;
      height: 100px;
      user-select: none;
      -webkit-user-select: none;
    }

    .heroChange {
      display: block;
      text-align: center;
      background: #000;
      color: #fff;
      font-size: 13px;
      line-height: 0.95rem;
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .heroNick {
    text-align: center;
    display: block;
    font-size: 22px;
    font-weight: bold;
  }
}
</style>
