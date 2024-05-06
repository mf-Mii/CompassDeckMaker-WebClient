<script setup>

</script>

<template>
  <div id="deckBox-TotalStatus">
    <h5>デッキ総合戦力</h5>
    <ul>
      <RightDeck_Status type="atk" :value="status.attack" :calc_value="calc_status.attack" />
      <RightDeck_Status type="def" :value="status.defense" :calc_value="calc_status.defense" />
      <RightDeck_Status type="phy" :value="status.physical" :calc_value="calc_status.physical" />
    </ul>
    <div id="deckBox-TotalStatus-HeroCalc">
      <div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="DeckBox-TotalStatus-HeroCalcSwitch" name=""><label class="form-check-label" for="DeckBox-TotalStatus-HeroCalcSwitch">ヒーロー倍率補正計算</label></div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
<script>
import RightDeck_Status from "@/components/deckmaker/rightmenu/deck/RightDeck_Status.vue";

export default {
  components: {
    RightDeck_Status
  },
  props: {
    status: {
      type: Object,
      default: () => {
        return {
          attack: 0,
          defense: 0,
          physical: 0
        }
      }
    },
    calc_status: {
      type: Object,
      default: () => {
        return {
          attack: 0,
          defense: 0,
          physical: 0
        }
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  beforeMount() {
  },
}
</script>
