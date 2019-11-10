<template>
  <div class="container-article">
    <Breadcrumb />
    {{ getTitlesArticle }}
    <SummaryArticle :titles-article="getTitlesArticle" />
    <ArticleContent :article="article" />
  </div>
</template>

<script>
import Breadcrumb from '@/components/BreadCrumbs'
import ArticleContent from '@/components/ArticleContent.vue'
import SummaryArticle from '@/components/SummaryArticle.vue'
export default {
  components: {
    Breadcrumb,
    ArticleContent,
    SummaryArticle
  },
  data() {
    return {
      article: {
        title: 'Mon super article',
        bannerImg: 'http://via.placeholder.com/1200x360',
        sections: [
          {
            id: 'Section1',
            title: 'Bases',
            subSections: [
              {
                id: 'Subsection1',
                title: 'Les critères',
                textHTML: `<p>Avant de parler meilleurs combos selon les différents niveaux de jeux, on parler en 1er de globalement des 3 meilleurs légendes et expliquer pourquoi.</p>
            <p>Avant de parler meilleurs combos selon les différents niveaux de jeux, on parler en 1er de globalement des 3 meilleurs légendes et expliquer pourquoi.</p>
            <ul>
              <li>La Hitbox</li>
              <p>C’est un critère qui a une grande importance à tout niveaux, cela représente la taille de notre personnage qui est sensible au tir. Plus il est petit et plus il est difficile de toucher.Respawn essayé d’équilibrer cela en donnant des handicaps (les petits gabarits prennent plus de dégâts).</p>
              <li>Capacité de déplacement</li>
              <p>Tous les personnages vont à la même vitesse (malgré les différentes corpulences), donc cela dépend surtout des pouvoirs du personnage. Pathfinder a par exemple une grande mobilité grâce à son grappin. </p>
              <li>Impact des pouvoirs</li>
              <p>Certains personnages peuvent avoir une grande mobilité (ex : Octane) mais l’impact de ses pouvoirs est limité car la plupart ne concerne que lui, alors que d’autres pouvoirs peuvent être orienté plus teamplay.</p>
            `
              }
            ]
          },
          {
            id: 'Section2',
            title: 'Test',
            subSections: [
              {
                id: 'Subsection2',
                title: 'Les Tests',
                textHTML: `<p>Avant de parler meilleurs combos selon les différents niveaux de jeux, on parler en 1er de globalement des 3 meilleurs légendes et expliquer pourquoi.</p>
            <p>Avant de parler meilleurs combos selon les différents niveaux de jeux, on parler en 1er de globalement des 3 meilleurs légendes et expliquer pourquoi.</p>
            <ul>
              <li>La Hitbox</li>
              <p>C’est un critère qui a une grande importance à tout niveaux, cela représente la taille de notre personnage qui est sensible au tir. Plus il est petit et plus il est difficile de toucher.Respawn essayé d’équilibrer cela en donnant des handicaps (les petits gabarits prennent plus de dégâts).</p>
              <li>Capacité de déplacement</li>
              <p>Tous les personnages vont à la même vitesse (malgré les différentes corpulences), donc cela dépend surtout des pouvoirs du personnage. Pathfinder a par exemple une grande mobilité grâce à son grappin. </p>
              <li>Impact des pouvoirs</li>
              <p>Certains personnages peuvent avoir une grande mobilité (ex : Octane) mais l’impact de ses pouvoirs est limité car la plupart ne concerne que lui, alors que d’autres pouvoirs peuvent être orienté plus teamplay.</p>
            `
              }
            ]
          }
        ]
      }
    }
  },
  computed: {
    getTitlesArticle() {
      const article = this.article
      const result = article.sections.map((e) => {
        const subtitles = e.subSections.map((subSection) => {
          return subSection.title
        })
        const summarySection = {
          title: e.title,
          id: e.id,
          subSections: subtitles
        }
        return summarySection
      })
      return result
    }
  }
}
</script>

<style scoped></style>
