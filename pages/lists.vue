<template>
  <div>
    <BreadCrumbs :current="status" />
    <Lists />
    <transition name="fade">
      <Grids
        :type="isVoid ? 0 : 1"
        :list="isVoid ? categories : articlesByCategory"
      />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Lists from '@/components/ListsCategories'
import BreadCrumbs from '@/components/BreadCrumbs'
import Grids from '@/components/Grids'

export default {
  components: {
    Lists,
    Grids,
    BreadCrumbs
  },
  data() {
    return {
      categories: [
        {
          title: 'Guides',
          quote: 'Des tutos simples et rapide à lire pour comprendre le jeux',
          img: 'Composant2.png',
          id: 0
        },
        {
          title: 'Légendes',
          quote: 'Retrouvez toutes les infos sur les personnages',
          img: 'Composant3.png',
          id: 1
        },
        {
          title: 'Joueurs',
          quote: "Apprenez en regardant ce que font d'autres joueurs",
          img: 'Composant4.png',
          id: 2
        },
        {
          title: 'Analyse',
          quote: 'Analysons la méta, la map et des gameplays de pro',
          img: 'Composant5.png',
          id: 3
        },
        {
          title: 'Loot',
          quote:
            'Gérez votre inventaire, apprenez en plus sur tous les objets du jeux !',
          img: 'Composant6.png',
          id: 4
        }
      ],
      articles: [
        {
          title: 'article1',
          img: 'Composant2.png',
          quote: 'Nouvel article sortie  pour les légendes!',
          category: 'Légendes',
          slug: 'article-1',
          id: 0
        },
        {
          title: 'article2',
          img: 'Composant3.png',
          quote: 'Nouvel article sortie !',
          category: 'Légendes',
          slug: 'article-2',
          id: 1
        },
        {
          title: 'article3',
          img: 'Composant2.png',
          quote: 'Nouvel article sortie pour les guides!',
          category: 'Guides',
          slug: 'article-3',
          id: 2
        },
        {
          title: 'article4',
          img: 'Composant4.png',
          quote: 'Nouvel article sortie !',
          category: 'Joueurs',
          slug: 'article-4',
          id: 3
        },
        {
          title: 'article5',
          img: 'Composant5.png',
          quote: 'Nouvel article sortie !',
          category: 'Guides',
          slug: 'article-5',
          id: 4
        },
        {
          title: 'article6',
          img: 'Composant2.png',
          quote: 'Nouvel article sortie !',
          category: 'Guides',
          slug: 'article-6',
          id: 5
        },
        {
          title: 'article6',
          img: 'Composant2.png',
          quote: 'Nouvel article sortie !',
          category: 'Joueurs',
          slug: 'article-7',
          id: 6
        },
        {
          title: 'article6',
          img: 'Composant2.png',
          quote: 'Nouvel article sortie !',
          category: 'Guides',
          slug: 'article-8',
          id: 7
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['status']),
    categoryStatus() {
      const cat = this.status[0]
      return this.categories.find((item) => item.title === cat.name)
    },
    articlesByCategory() {
      const articles = this.status[1]
      return this.articles.filter((e) => e.category === articles.name)
    },
    isVoid() {
      return this.status[1].name === 'void'
    }
  }
}
</script>

<style scoped>
.slide-left-enter-active {
  transition: all 1s ease;
}

.slide-left-leave {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
