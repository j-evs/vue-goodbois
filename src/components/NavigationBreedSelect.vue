<template>
  <select @change="filterByBreed">
    <option v-for="(breed, i) in breeds" :key="i">
        {{breed}}
    </option>
  </select>
</template>

<script>
export default {
  name: 'NavigationBreedSelect',
  props: {
    breeds: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    filterByBreed: function (e) {
      const breed = e.target.value
      return this.$router.push({name: 'Breed', params: { breed }})
    }
  }
}
</script>

<style scoped>

</style>
