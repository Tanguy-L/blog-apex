<template>
  <header>
    <nuxt-link class="container-nav" to="/lists">
      <i class="material-icons button-icon">keyboard_backspace</i>
      <p>Revenir à la page précédente</p>
    </nuxt-link>
    <nuxt-link class="link" to="/">
      <div class="container-logo">
        <img src="~/assets/logo.png" alt="logo du site" />
      </div>
    </nuxt-link>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.container-nav {
  display: flex;
  align-items: center;
  height: 3rem;
  margin-left: 24px;
  padding: 12px 24px;
  margin-top: 24px;
  transition: all 0.4s;
  text-decoration: none;
  color: inherit;
}

.button-icon {
  padding: 0.25rem;
}

.container-nav:hover {
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.247) 0 3px 6px;
  color: white;
  background-color: brown;
}

.container-nav p {
  margin-left: 0.25rem;
}

header {
  display: flex;
  position: relative;
  height: 10rem;
}

.link {
  position: absolute;
  top: 0;
  left: calc(50% - 75px);
}

.container-logo {
  width: 150px;
}

.container-logo img {
  width: 100%;
  height: auto;
}
</style>
