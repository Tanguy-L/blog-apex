<template>
  <div>
    <BreadCrumbs />
    <Lists />
    <Grids :list="categories" />
  </div>
</template>

<script>
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
          img: 'Composant2.png'
        },
        {
          title: 'Légendes',
          quote: 'Retrouvez toutes les infos sur les personnages',
          img: 'Composant3.png'
        },
        {
          title: 'Joueurs',
          quote: "Apprenez en regardant ce que font d'autres joueurs",
          img: 'Composant4.png'
        },
        {
          title: 'Analyse',
          quote: 'Analysons la méta, la map et des gameplays de pro',
          img: 'Composant5.png'
        },
        {
          title: 'Loot',
          quote:
            'Gérez votre inventaire, apprenez en plus sur tous les objets du jeux !',
          img: 'Composant6.png'
        }
      ]
    }
  }
}
</script>

<style></style>
