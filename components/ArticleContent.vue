<template>
  <div class="container-article">
    <div class="container-image">
      <img :src="article.bannerImg" alt />
    </div>
    <section class="margin-top padding">
      <h2>{{ article.title }}</h2>
      <h3>{{ article.section1.Title }}</h3>
      <h4>{{ article.section1.subSection1.title }}</h4>
      <div
        class="container-content"
        v-html="article.section1.subSection1.textHTML"
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: 'Mon super article',
        bannerImg: 'http://via.placeholder.com/1200x360',
        section1: {
          Title: 'Bases',
          subSection1: {
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
        }
      }
    }
  }
}
</script>

<style scoped>
.container-article {
  width: 704px;
  display: block;
  margin: auto;
  margin-top: 72px;
  background-color: #5b5b5b;
  margin-bottom: 36px;
  box-shadow: rgba(0, 0, 0, 0.226) 0px 6px 8px;
}

.container-image {
  max-width: 1000px;
}

.container-image img {
  width: 100%;
  height: auto;
}

.container-content {
  color: white;
}

.container-content >>> p {
  margin-top: 8px;
}

.container-content >>> ul {
  font-family: 'Quicksand';
  margin-top: 16px;
}

.container-content >>> li {
  font-family: 'Quicksand';
  margin-top: 8px;
}

.margin-top {
  margin-top: 36px;
}

.padding {
  padding: 24px;
}

h2 {
  font-family: 'Teko';
  font-size: 3rem;
  line-height: 72px;
  color: white;
  text-align: center;
}

h3 {
  font-family: 'Quicksand';
  font-weight: 100;
  font-size: 1.75rem;
  line-height: 36px;
  color: #41f9e0;
}

h4 {
  color: #ffe817;
  font-weight: 100;
  font-family: 'Quicksand';
  font-size: 1.25rem;
  line-height: 36px;
}

p {
  font-family: 'Quicksand';
  font-size: 12px;
  line-height: 16px;
  color: white;
}
</style>
