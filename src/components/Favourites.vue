<template>
  <div>
    {{favourites}}
  </div>
</template>

<script>
import {getFavourites} from '../api/favourites'
export default {
  name: 'Favourites',
  data: function () {
    return {
      favourites: []
    }
  },
  mounted () {
    this.favourites = getFavourites()
  }
}
</script>

<style scoped>

</style>
