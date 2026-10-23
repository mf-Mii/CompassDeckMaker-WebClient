<script setup>

</script>

<template>
  <div class="cps_toggleBtn">
    <span class="status-text">OFF</span>
    <button class="change-btn" type="button">変更</button>
  </div>
</template>

<style scoped lang="scss">
.cps_toggleBtn {
  background: #666;
  .status-text {
    width: calc(100% - 52px);
    display: inline-block;
    text-align: center;
    color: #fff;
    font-weight: bold;
  }
  .change-btn {
    width: 52px;
    outline: none;
    border: 3px solid #9b530a;
    background: var(--cps-theme);
    color: #fff;
    box-shadow: 0 0 2px rgb(0, 8, 54);
  }
}

</style>
