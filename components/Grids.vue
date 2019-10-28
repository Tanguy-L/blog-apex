<template>
  <div>
    <transition-group class="container-grid" name="fade">
      <div
        v-for="(e, index) in list"
        :key="index"
        :style="{
          backgroundImage: 'url(' + require(`~/assets/${e.img}`) + ')'
        }"
        class="grid-element"
        @click="changeStatus(e.title)"
      >
        <div class="grid-element-cell">
          <h3 class="cell-title">{{ e.title }}</h3>
          <div class="cell-description">
            <p class="cell-text">{{ e.quote }}</p>
          </div>
        </div>
        <nuxt-link
          v-if="type === 1"
          class="top-link"
          :to="'/articles/' + e.slug"
        ></nuxt-link>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    type: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['updateStatus']),
    changeStatus(title) {
      const payload = {
        key: this.type,
        name: title
      }
      this.updateStatus(payload)
    }
  }
}
</script>

<style scoped>
.container-grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 460px));
  display: grid;
  margin: auto;
  justify-content: center;
  margin-top: 64px;
}

.grid-element {
  margin: 8px;
  position: relative;
  min-height: 254px;
  background-size: cover;
  background-position: center;
  transition: all 0.2s;
}

.grid-element:hover {
  box-shadow: rgba(0, 0, 0, 0.295) 0 3px 12px;
  cursor: pointer;
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
  grid-area: 3 / 2;
}

.cell-description {
  background-color: #46464698;
  width: 100%;
}

.top-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cell-text {
  color: white;
  padding: 16px 8px 16px 8px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media screen and (max-width: 800px) {
}
</style>
