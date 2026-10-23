<template>
  <div class="modal fade cpsdm-modal-custom-animation" role="dialog" tabindex="-1" id="modal-Hero" data-bs-theme="dark" data-modal-animation="1">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content"><button class="btn-close btn-close-white" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
        <div class="hero-info-title">
          <h1>メグメグ</h1>
          <h5>通称: メグ, 姫</h5>
        </div>
        <div class="hero-info-container">
          <ModalHero_LeftContainer :hero="{}" />
          <ModalHero_RightContainer :hero="{}" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#modal-Hero {
  color: #eee;
  .modal-dialog {
    width: 80%;
    max-width: 800px;
    .modal-content {
      background: #000000e5;
      padding: 10px 0;
      .btn-close {
        position: absolute;
        top: 10px;
        right: 10px;
        border: none !important;
        box-shadow: none !important;
        opacity: 1;
        width: 20px;
        height: 20px;
        background-size: cover;
      }
      .hero-info-title {
        padding: 0 10px;
        h5 {
          font-weight: normal;
          font-size: 18px;
        }
      }
      .hero-info-container {
        display: flex;
        overflow-y: scroll;
        > * {
          padding: 0 10px;
        }
      }
    }
  }
}
</style>
<script lang="ts">

import {defineComponent} from "vue";
import ModalHero_LeftContainer from "@/components/deckmaker/modals/hero/ModalHero_LeftContainer.vue";
import ModalHero_RightContainer from "@/components/deckmaker/modals/hero/ModalHero_RightContainer.vue";

export default defineComponent({
  components: {ModalHero_RightContainer, ModalHero_LeftContainer}
})


defineComponent({
  name: "ModalHero",
  props: {
    hero: {
      type: Object,
      required: true
    }
  }
});
</script>
