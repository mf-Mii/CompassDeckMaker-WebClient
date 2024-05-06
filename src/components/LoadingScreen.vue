<script setup>

</script>

<template>

  <!-- Start: LoadingScreen -->
  <div id="loadingScreen" class="hide">
    <div class="text-center" id="loadingScreenContent"><img src="http://cpsdm-assets.local.mfmii.work/img/logo.svg">
      <div class="progress">
        <div class="progress-bar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"><span class="visually-hidden">0%</span></div>
      </div><span class="status">Loading...</span>
    </div><!-- Start: Debug -->
    <div>
      <button class="btn btn-secondary" type="button" onclick="new CpsDM().LoadingScreen.HideLoadingScreen();">Debug[HideLoadingScreen]</button>
      <button class="btn btn-secondary" type="button" onclick="const DM = new CpsDM();">Debug[HideLoadingScreen]</button>
    </div><!-- End: Debug -->
  </div><!-- End: LoadingScreen -->
</template>

<style scoped lang="scss">


#loadingScreen {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
  background: #fff;
  user-select: none;
}

#loadingScreenContent {
  img {
    display: block;
    width: 80%;
    margin: 30px auto;
  }

  display: block;
  position: absolute;
  width: 80%;
  max-width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .progress {
    --bs-progress-bar-bg:#F81;
    --bs-progress-height:0.5rem;
  }
}
</style>
