<template>
  <div class="container">
    <appHeader></appHeader>
    <div class="row">
      <div class="col-xs-12">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      'appHeader': Header
    },
    created() {
      this.$store.dispatch('initStocks')
    }
  }
</script>

<style>
  body {
    padding: 20px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
