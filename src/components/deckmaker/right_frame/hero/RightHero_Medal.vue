<script setup>

</script>

<template>
  <li class="medal">
    <div>
      <img class="medal_base" src="assets/img/MedalBase01.png">
      <img class="medal_icon" src="assets/img/MedalIcon001.png">
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
