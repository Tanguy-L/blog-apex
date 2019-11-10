<template>
  <div class="container-main">
    <h1 class="title margin-left margin-top">Apex-Theory</h1>
    <h2 class="sub-title margin-left">
      Le lieu idéal pour trouver les meilleurs analyses et infos du jeu
    </h2>
    <div class="background-button margin-top">
      <div class="button-home">
        <button class="button-home-text">Patchnote du site</button>
        <nuxt-link class="link-home" to="/patchnote"></nuxt-link>
      </div>
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
        <nuxt-link class="link-home" to="/"></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
}

.background-button {
  display: inline-block;
  position: relative;
  width: 500px;
  height: 64px;
  box-sizing: border-box;
  transition: all 0.2s;
}

.button-home {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 490px;
  height: 54px;
  top: 0;
  left: -15px;
  z-index: 5;
  box-sizing: content-box;
  border: 10px solid #ffffff;
  border-left: none;
  border-top: none;
  background: url('../assets/button.png');
  opacity: 0.96;
  transform: skewX(-15deg);
  transition: all 0.2s;
}

.button-home:hover {
  border-color: #505050;
}

.button-home-text {
  border: none;
  background: none;
  color: rgb(255, 174, 67);
  font-size: 2.25rem;
  font-family: 'Teko', sans-serif;
  letter-spacing: 1px;
  font-weight: 100;
  transform: skewX(15deg);
}
</style>
