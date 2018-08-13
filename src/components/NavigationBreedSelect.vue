<template>
  <select @change="onBreedSelect" :value="breed">
    <option :value="undefined"> All breeds </option>
    <option v-for="(breed, i) in breeds" :key="i" >
        {{breed}}
    </option>
  </select>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavigationBreedSelect',

  computed: {
    ...mapGetters(['breeds', 'breed'])
  },
  methods: {
    onBreedSelect: function (e) {
      const breed = e.target.value
      return this.$router.push({name: 'AllImages', params: { breed }})
    }
  }
}
</script>

<style scoped>

</style>
