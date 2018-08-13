<template >
  <div>
    <div class="background"></div>
    <div class="imagesWrapper">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ImagesWrapper'
}
</script>

<style scoped>

.imagesWrapper {
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 250px 150px;
  grid-gap: 30px;
  background-size: 100px;
}

.background {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: no-repeat 50% 30% url('../assets/doge3.png');
}
</style>
