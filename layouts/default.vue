<template>
  <div>
    <HeaderApp />
    <nuxt />
  </div>
</template>

<script>
import HeaderApp from '@/components/Header.vue'
export default {
  components: {
    HeaderApp
  }
}
</script>

<style>
html {
  word-spacing: 1px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
