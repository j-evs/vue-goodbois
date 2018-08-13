<template>
  <div id="app">
    <header class="header">
      <navigation></navigation>
    </header>
    <main class="main" >
      <router-view v-if="!isError"></router-view>
      <div v-else>Something went wrong. Please try again later.</div>
    </main>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import ImagesWrapper from './components/ImagesWrapper'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Navigation,
    ImagesWrapper
  },
  computed: {
    ...mapGetters(['isError'])
  },
  methods: {
    ...mapActions(['getBreeds', 'addBreedImages'])
  },
  mounted () {
    this.getBreeds()
    this.addBreedImages()
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #F9F9EF;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  height: 60px;
  background: rgba(0,0,0,0.1);
}
.main {
  padding: 20px;
}
</style>
