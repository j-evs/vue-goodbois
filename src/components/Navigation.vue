<template>
  <nav class="nav">
    <router-link to="/">Homepage</router-link>
    <router-link to="/favourites">Favourites</router-link>
    <navigation-breed-select></navigation-breed-select>
  </nav>
</template>

<script>
import NavigationBreedSelect from './NavigationBreedSelect'

export default {
  name: 'Menu',
  components: {
    NavigationBreedSelect
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
}
</style>
