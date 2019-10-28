<template>
  <div class="container-main">
    <HeaderApp />
    <h1 class="title margin-left">Apex-Theory</h1>
    <h2 class="sub-title margin-left">
      Le lieu idéal pour trouver les meilleurs analyses et infos du jeu
    </h2>
    <div class="background-button margin-top">
      <div class="button-home">
        <button class="button-home-text">Patchnote du site</button>
      </div>
      <nuxt-link class="link-home" to="/patchnote"></nuxt-link>
    </div>
    <div class="background-button margin-small-top">
      <div class="button-home">
        <button class="button-home-text">Go !</button>
        <nuxt-link class="link-home" to="/lists"></nuxt-link>
      </div>
    </div>
    <div class="background-button margin-small-top">
      <div class="button-home">
        <button class="button-home-text">F.A.Q</button>
        <nuxt-link class="link-home" to="/faq"></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderApp from '@/components/Header.vue'
export default {
  components: {
    HeaderApp
  },
  layout: 'empty'
}
</script>

<style scoped>
.container-main {
  background-image: url('../assets/background.jpg');
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: white;
}

.margin-left {
  margin-left: 24px;
}

.margin-top {
  margin-top: 96px;
}

.link-home {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}

.margin-small-top {
  margin-top: 48px;
}

h1 {
  font-family: 'Teko', sans-serif;
  font-size: 5rem;
  line-height: 5rem;
  text-transform: uppercase;
  margin-top: 24px;
}

.sub-title {
  margin-top: 24px;
  font-family: 'Quicksand', sans-serif;
  font-size: 2rem;
  line-height: 3rem;
  max-width: 600px;
}

.background-button:hover {
  cursor: pointer;
  background: rgb(85, 85, 85);
}

.background-button {
  display: inline-block;
  position: relative;
  width: 500px;
  height: 64px;
  background: rgb(255, 255, 255);
  box-sizing: border-box;
  clip-path: polygon(0% 0, 100% 0%, 95% 100%, 0 100%);
  filter: drop-shadow(30px 10px 4px rgb(0, 0, 0));
  transition: all 0.2s;
}

.background-button div {
  position: absolute;
  top: 0;
  left: 0;
  width: 490px;
  height: 54px;
  background: url('../assets/button.png');
  opacity: 0.96;
  clip-path: polygon(0% 0, 100% 0%, 96% 100%, 0 100%);
  z-index: 5;
}

.button-home {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-home-text {
  border: none;
  background: none;
  color: rgb(255, 174, 67);
  font-size: 2.25rem;
  font-family: 'Teko', sans-serif;
  letter-spacing: 1px;
  font-weight: 100;
}
</style>
