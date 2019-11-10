<template>
  <div class="container-article">
    <div class="container-image">
      <img :src="article.bannerImg" alt />
    </div>
    <section class="margin-top padding">
      <h2>{{ article.title }}</h2>
      <div v-for="section in article.sections" :key="section.id">
        <h3>{{ section.title }}</h3>
        <div v-for="subSection in section.subSections" :key="subSection.id">
          <h4>{{ subSection.title }}</h4>
          <article class="container-content" v-html="subSection.textHTML" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => {
        return {}
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
  margin-top: 16px;
}

.container-content >>> p {
  margin-top: 8px;
  font-size: 1.05rem;
  font-family: 'Raleway';
}

.container-content >>> ul {
  font-family: 'Raleway';
  margin-top: 16px;
  font-size: 16px;
}

.container-content >>> li {
  font-family: 'Raleway';
  margin-top: 16px;
  color: #ff7a7a;
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
  font-size: 1.85rem;
  line-height: 36px;
  color: #41f9e0;
  margin-top: 24px;
}

h4 {
  color: #ffe817;
  font-weight: 100;
  font-family: 'Quicksand';
  font-size: 1.55rem;
  line-height: 36px;
  margin-top: 16px;
}

p {
  font-family: 'Quicksand';
  font-size: 12px;
  line-height: 16px;
  color: white;
}
</style>
