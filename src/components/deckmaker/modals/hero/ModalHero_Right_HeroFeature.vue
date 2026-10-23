<template>
  <div class="hero_feature">
    <div class="title"><span class="head">{{ getTypeText($props.type as string) }}</span><span class="content">{{ $props.title }}</span></div>
    <p class="description">
      <span class="main">{{ $props.subtext ? $props.text : '' }}</span>
      <span>{{ $props.subtext ? '\n'+$props.subtext : $props.text }}</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
.hero_feature {
  width: 100%;
  padding: 0 10px 3px 10px;
  margin: 3px 0;
  background: #ddd;
  .title {
    .head {
      width: 60px;
      background: #333;
      line-height: 16px;
      font-size: 14px;
      clip-path: polygon(0 0, 90% 0%, 100% 50%, 90% 100%, 0 100%);
      display: inline-block;
      margin-right: 10px;
    }
    .content {
      color: #333;
      font-size: 18px;
      font-weight: bold;
    }
    border-bottom: 1px solid #666;
  }
  .description {
    .main {
      color: #333;
      font-weight: bold;
    }
    .val {
      color: #333;
    }
    color: #666;
    font-size: 14px;
    margin-bottom: 0;
    > span {
      white-space: pre-wrap;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ModalHero_Right_HeroFeature',
  setup() {
    return {

    }
  },
  props: {
    type: {
      type: String,
      default: 'ab',
      required: true,
      validator(value: string, props): boolean {
        return ['ab', 'ha', 'hs'].includes(value)
      }
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    text: {
      type: String,
      default: '',
      required: true
    },
    subtext: {
      type: String,
      default: ''
    }
  },
  methods: {
    getTypeText(type: string) {
      switch (type) {
        case 'ab':
          return 'ｱﾋﾞﾘﾃｨ'
        case 'ha':
          return 'ｱｸｼｮﾝ'
        case 'hs':
          return 'ﾋｰﾛｰｽｷﾙ'
        default:
          return ''
      }
    }
  }
})
</script>
