<template>
  <div class="container-fixed">
    <p class="title">Sommaire</p>
    <div v-for="title in titlesArticle" :key="title.title">
      <p>{{ title.title }}</p>
      <div v-for="subtitle in title.subSections" :key="subtitle">
        <p>{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titlesArticle: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.container-fixed {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  background: linear-gradient(0.25turn, #6d65b7, #734c75);
  max-width: 200px;
  color: white;
}
</style>
