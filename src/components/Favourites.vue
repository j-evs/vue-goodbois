<template>
  <images-wrapper>
    <div v-for="(favourite, i) in favourites" :key="i">
      <dog-image class="dogImage" :src="favourite" is-fav></dog-image>
    </div>
  </images-wrapper>
</template>

<script>
import DogImage from './DogImage'
import ImagesWrapper from './ImagesWrapper'

import { mapGetters } from 'vuex'

export default {
  name: 'Favourites',
  components: {
    ImagesWrapper,
    DogImage
  },
  computed: {
    ...mapGetters(['favourites'])
  }
}
</script>

<style scoped>

</style>
