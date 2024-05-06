<script setup>
</script>

<template>
  <header>
    <!-- Start: NavBar -->
    <nav class="navbar navbar-expand-md py-3 navbar-light">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="./"><img src="http://cpsdm-assets.local.mfmii.work/img/logo.svg" style="height: 75px;"></a>
        <div class="collapse navbar-collapse" id="menu-nav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/deckmaker" :class="'nav-link' + (this.$route?.path === '/deckmaker' ? ' active':'')">デッキ編成</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" :class="'nav-link' + (this.$route?.path === '/about' ? ' active':'')">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/settings" :class="'nav-link' + (this.$route?.path === '/settings' ? ' active':'')">設定</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" :class="'nav-link' + (this.$route?.path === '/contact' ? ' active':'')">問い合わせ</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/other" :class="'nav-link' + (this.$route?.path === '/other' ? ' active':'')">その他</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/test" :class="'nav-link' + (this.$route?.path === '/test' ? ' active':'')">テスト</router-link>
            </li>
          </ul>
        </div>
        <div class="app-info"><span class="fs-2 d-block d-xxl-flex align-items-xxl-center">#コンパス DeckMakaer</span>
          <div><span>Created by mf_Mii</span><span class="float-end">応援コード: C-JesK</span></div>
        </div>
        <button data-bs-target="#navcol-1" data-bs-toggle="collapse" class="navbar-toggler"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
      </div>
    </nav><!-- End: NavBar -->
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/css/header";
</style>
<script>
export default {
  name: "Header",
  data() {
    return {
      currentPath: this.$route?.path,

    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  },
  beforeMount() {
  }
}
</script>
