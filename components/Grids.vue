<template>
  <div class="container-grid">
    <div v-for="(e, index) in list" :key="index" class="grid-element">
      <img class="image-grid" :src="e.img" alt />
      <div class="grid-element-cell">
        <h3 class="cell-title">{{ e.title }}</h3>
        <div class="cell-description">
          <p class="cell-text">{{ e.quote }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped>
.container-grid {
  width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
  margin: auto;
}

.grid-element {
  margin: 8px;
  position: relative;
  min-width: 250px;
}

.cell-title {
  color: white;
  padding: 0 8px;
}

.image-grid {
  width: 100%;
  height: 100%;
}

.grid-element-cell {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.cell-description {
  background-color: #46464698;
  width: 100%;
}

.cell-text {
  color: white;
  padding: 16px 8px 16px 8px;
}
</style>
