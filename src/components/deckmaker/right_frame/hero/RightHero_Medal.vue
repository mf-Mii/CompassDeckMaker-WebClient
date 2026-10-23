<script setup>

</script>

<template>
  <li class="medal">
    <div>
      <img class="medal_base" src="" alt="">
      <img class="medal_icon" src="" alt="">
    </div>
  </li>
</template>

<style scoped lang="scss">
.medal {
  flex: 1;
  > div {
    position: relative;

    > img {
      position: absolute;

      &.medal_base {
        width: 100%;
      }

      &.medal_icon {
        width: 65%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, 22.5%);
      }
    }
  }
}
</style>
