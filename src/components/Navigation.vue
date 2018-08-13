<template>
  <nav>
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

</style>
