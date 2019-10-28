<template>
  <div class="container">
    <transition-group class="container" name="fade">
      <div
        v-for="(cell, index) in status"
        :key="cell.id"
        class="container-bread"
        @click="changeList(cell.id)"
      >
        <div class="container-text" :class="cell.status">
          <h4>{{ cell.text }}</h4>
        </div>
        <i v-if="index !== status.length - 1" class="material-icons icon-cell"
          >chevron_right</i
        >
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    current: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      categories: ['Guides', 'Légendes', 'Joueurs', 'Analyses', 'Loot']
    }
  },
  computed: {
    ...mapGetters(['status'])
  },
  methods: {
    ...mapActions(['updateStatusBread', 'updateAndKeepCategory']),
    changeList(id) {
      if (this.status[id].status === 'validate') {
        const defaultText = [
          'Liste Catégories',
          'Liste Articles',
          "Lecture de l'article"
        ]

        const payload = {
          key: id,
          name: defaultText[id]
        }

        if (this.$route.name === 'articles-slug') {
          this.$router.push({ path: '/lists' })
          this.updateAndKeepCategory(payload)
        } else {
          this.updateStatusBread(payload)
        }
      }
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
  padding: 16px 0px;
  border: solid rgba(128, 128, 128, 0.288) 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.158);
  max-width: 100%;
  display: inline-block;
  transition: all 0.2s;
  width: 364px;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media screen and (max-width: 1300px) {
  .container-text {
    width: 250px;
  }
}
@media screen and (max-width: 800px) {
  .container {
    flex-direction: column;
  }
  i {
    display: none;
  }
  .container-bread {
    justify-content: center;
  }
}
@media screen and (max-width: 400px) {
  .container-text {
    width: 200px;
  }
}
</style>
