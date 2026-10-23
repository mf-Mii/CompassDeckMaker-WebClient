<script setup>

</script>

<template>
  <div class="page-change-buttons">
    <button class="selected" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24"
           width="1em" fill="currentColor" class="fs-4">
        <g>
          <path d="M0,0h24v24H0V0z" fill="none"></path>
          <path
              d="M11,7h2v2h-2V7z M11,11h2v6h-2V11z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20 c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z"></path>
        </g>
      </svg>
    </button>
    <button type="button">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor"
           class="fs-4">
        <path d="M0 0h24v24H0V0z" fill="none"></path>
        <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"></path>
      </svg>
    </button>
    <button type="button">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor"
           class="fs-4">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
            d="M19.99 4c0-1.1-.89-2-1.99-2h-8L4 8v12c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2l-.01-16zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z"></path>
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
.page-change-buttons {
  right: 0;
  filter: drop-shadow(0 0 5px #0006);
  position: absolute;
  z-index: 2000;
  > button {
    outline: none;
    background: #fff;
    border: none;
    &:first-child {
      border-radius: 5px 0 0 5px;
    }
    &:last-child {
      border-radius: 0 5px 5px 0;
    }
    &.selected {
      box-shadow: inset 0 0 15px #0005;
    }
  }
}
</style>
