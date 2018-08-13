<template>
  <select @change="onBreedSelect" :value="breed">
    <option v-for="(breed, i) in breeds" :key="i" >
        {{breed}}
    </option>
  </select>
</template>

<script>
export default {
  name: 'NavigationBreedSelect',
  created () {
    this.$store.dispatch('getBreeds')
  },
  computed: {
    breeds () {
      return this.$store.state.breeds
    },
    breed () {
      return this.$store.state.currentBreed
    }
  },
  methods: {
    onBreedSelect: function (e) {
      const breed = e.target.value
      return this.$router.push({name: 'Images', params: { breed }})
    }
  }
}
</script>

<style scoped>

</style>
