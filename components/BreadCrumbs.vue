<template>
  <div class="container">
    <div
      v-for="(cell, index) in elements"
      :key="cell.id"
      class="container-bread"
    >
      <div class="container-text" :class="cell.status">
        <h4>{{ cell.text }}</h4>
      </div>
      <i v-if="index !== elements.length - 1" class="material-icons icon-cell"
        >chevron_right</i
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elements: [
        { text: 'Liste Categories', id: 0, status: 'validate' },
        { text: 'Liste Articles', id: 1, status: 'choosen' },
        { text: "Lecture de l'article", id: 2, status: 'waiting' }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.choosen {
  background: linear-gradient(0.25turn, #6d65b7, #734c75);
  color: white;
  border: none !important;
}

.validate {
  background: linear-gradient(0.25turn, #ffaa85, #b3315f);
  color: white;
  border: none !important;
}

.container-text:hover {
  box-shadow: rgba(0, 0, 0, 0.295) 0 3px 12px;
  cursor: pointer;
}

.container-bread {
  margin-top: 32px;
  display: flex;
  align-items: center;
}

.icon-cell {
  margin: 0 24px;
}

.container-text {
  padding: 16px 96px;
  border: solid rgba(128, 128, 128, 0.288) 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.158);
  max-width: 100%;
  display: inline-block;
  transition: all 0.2s;
}
</style>
