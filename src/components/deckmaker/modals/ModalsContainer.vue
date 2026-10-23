<template>
  <div id="modalsContainer">
    <ModalHero :hero="{}" />
  </div>
</template>

<style lang="scss">
div.modal {
  .modal-content {
    border-radius: 0;
    border: none;
  }
}
// モーダルのアニメーション
div.modal.fade {
  &.cpsdm-modal-custom-animation[data-modal-animation="1"] {
    overflow-y: hidden;
    transition-duration: 0.1s;
    .modal-dialog {
      transition: 0.1s;
      opacity: 1;
      transform: none;
    }
    &:not(.show) {
      transition-duration: 0.3s;
      .modal-dialog {
        transform: translateY(100vh);
        transition-duration: 0.3s;
      }
    }
    &.show {
      transition-duration: 0s;
      .modal-dialog {
        transition-duration: 0.1s;
        transform: translateY(0);
      }
    }
  }

  &.cpsdm-modal-custom-animation[data-modal-animation="2"] {
    .modal-dialog {
      transition: 0.15s;
      opacity: 1;
      transform: none;
    }
    &:not(.show) .modal-dialog {
      transform: scale(0.4);
    }
    &.show .modal-dialog {
      transform: scale(1);
    }
  }

  &.cpsdm-modal-custom-animation[data-modal-animation="3"] {
    .modal-dialog {
      transition: 0.15s;
      opacity: 1;
      transform: none;
    }
    &:not(.show) .modal-dialog {
      transform: scale(2);
      opacity: 0;
    }
    &.show .modal-dialog {
      transform: scale(1);
    }
  }
  &.cpsdm-modal-custom-animation[data-modal-animation="4"] {
    overflow-y: hidden;
    transition-duration: 0.2s;
    .modal-dialog {
      transition: 0.2s;
      opacity: 1;
      transform: none;
    }
    &:not(.show) {
      .modal-dialog {
        transform: translateX(100vw);
      }
    }
    &.show {
      .modal-dialog {
        transform: translateX(0);
      }
    }
  }
}
</style>

<script lang="ts">
import {defineComponent} from "vue";
import ModalHero from "@/components/deckmaker/modals/hero/ModalHero.vue";

export default defineComponent({
  components: {ModalHero}
})


defineComponent({
  name: "ModalsContainer",

})
</script>
