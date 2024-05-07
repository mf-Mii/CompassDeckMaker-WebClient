<script setup>

</script>

<template>
  <div class="page hero-info">
    <div class="infoBox">
      <span>ILLUST: ぽあろ</span>
      <span>CV: 天野 心愛&amp;中尾 隆聖</span>
      <span>Motion: 217</span>
      <span>Music:&nbsp;<a class="herosong-link" href="#">バイオレンストリガー</a>&nbsp;(八王子P)</span>
      <button class="btn btn-secondary" id="heroInfo-openModal" type="button" data-bs-target="#modal-Hero"
              data-bs-toggle="modal">
        詳細
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24"
             width="1em" fill="currentColor">
          <g>
            <path d="M0,0h24v24H0V0z" fill="none"></path>
            <path
                d="M11,7h2v2h-2V7z M11,11h2v6h-2V11z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20 c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z"></path>
          </g>
        </svg>
      </button>
    </div>
    <ul class="status-selector">
      <li class="selected">
        <div class="status-selector-item"><span class="title">通常</span></div>
      </li>
      <li>
        <div class="status-selector-item"><span class="title">HS</span></div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.hero-info {
  .infoBox {
    width: 100%;
    font-size: 18px;
    line-height: 20px;
    margin-top: 10px;
    background: #fff8;
    padding: 10px;

    > span {
      display: block;
    }
  }

  .status-selector {
    display: flex;
    justify-content: center;
    align-items: start;
    list-style: none;
    padding: 10px 10px;
    margin-top: 10px;
    background-size: auto auto;
    background-color: rgb(128, 128, 128);
    background-image: repeating-linear-gradient(
            135deg,
            transparent,
            transparent 5px,
            rgba(162, 162, 162, 1) 5px,
            rgba(162, 162, 162, 1) 6px
    );

    > li {
      border: 2px solid #eee;
      height: 60px;
      width: 60px;
      margin: auto 6px;
      box-shadow: 0 0 3px #003;

      > .status-selector-item {
        width: 100%;
        height: 100%;
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;

        > span.title {
          font-weight: bold;
          color: #eee;
        }
      }

      &.selected > .status-selector-item {
        background-size: auto auto;
        background-color: rgba(43, 43, 43, 1);
        background-image: repeating-linear-gradient(
                135deg,
                transparent,
                transparent 5px,
                rgba(109, 109, 109, 1) 5px,
                rgba(109, 109, 109, 1) 6px
        );
        opacity: 1;
      }
    }
  }
}
</style>
