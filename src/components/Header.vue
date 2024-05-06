<script setup>
</script>

<template>
  <header>
    <!-- Start: NavBar -->
    <nav class="navbar navbar-expand-md py-3 navbar-light">
      <div class="container">
        <!-- Logo -->
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <img src="http://cpsdm-assets.local.mfmii.work/img/logo.svg" style="height: 75px;">
        </router-link>
        <div class="collapse navbar-collapse" id="menu-nav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/" :class="'nav-link' + (this.$route?.path === '/' ? ' active':'')">デッキ編成</router-link>
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
.bs-icon {
  --bs-icon-size:.75rem;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: var(--bs-icon-size);
  width: calc(var(--bs-icon-size) * 2);
  height: calc(var(--bs-icon-size) * 2);
  color: var(--bs-primary);
}

.bs-icon-xs {
  --bs-icon-size:1rem;
  width: calc(var(--bs-icon-size) * 1.5);
  height: calc(var(--bs-icon-size) * 1.5);
}

.bs-icon-sm {
  --bs-icon-size:1rem;
}

.bs-icon-md {
  --bs-icon-size:1.5rem;
}

.bs-icon-lg {
  --bs-icon-size:2rem;
}

.bs-icon-xl {
  --bs-icon-size:2.5rem;
}

.bs-icon {
  &.bs-icon-primary {
    color: var(--bs-white);
    background: var(--bs-primary);
  }

  &.bs-icon-primary-light {
    color: var(--bs-primary);
    background: rgba(var(--bs-primary-rgb), 0.2);
  }

  &.bs-icon-semi-white {
    color: var(--bs-primary);
    background: rgba(255, 255, 255, 0.5);
  }

  &.bs-icon-rounded {
    border-radius: .5rem;
  }

  &.bs-icon-circle {
    border-radius: 50%;
  }
}
header {
  height: 100px;
  width: 100%;
  box-shadow: 0 0 5px var(--bs-black);
  z-index: 5000;

  .navbar {
    height: 100%;
    width: 100%;

    .container {
      display: flex;
      flex-wrap: inherit;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 0;
      max-width: none;

      .navbar-brand {
        padding: 0;
        height: 100%;
      }

      #menu-nav {
        font-size: 20px;
        margin: 0 5px;
        .nav-link {
          transition: .2s;
          &.active {
            color: var(--cps-theme) !important;
            border-bottom: 1px solid var(--cps-theme);
            font-weight: bold;
            margin: 0 16px;
          }
        }
      }
    }
  }
}
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
