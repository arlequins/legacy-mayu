<template>
  <div id="me-custom-flag" class="container">
    <div>
      <header></header>
      <router-view></router-view>
      <footer></footer>
    </div>
  </div>
</template>
<script>
import header from './components/Header'
import footer from './components/Footer'

export default {
  name: 'app',
  components: {
    header, footer
  },
  computed: {
  },
  created() {
  }
}
</script>
<style>
</style>
