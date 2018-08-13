<template>
  <div>
    <div class="hello" v-for="(favourite, i) in favourites" :key="i">
      <dog-image :src="favourite" is-fav></dog-image>
    </div>
  </div>
</template>

<script>
import DogImage from './DogImage'

export default {
  name: 'Favourites',
  components: {
    DogImage
  },
  computed: {
    favourites () {
      return this.$store.state.favourites
    }
  }
}
</script>

<style scoped>

</style>
