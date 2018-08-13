<template>
  <div class="wrapper">
    <div @click="toggleFavourite(src)" :class="['iconWrapper', {favourite: isFav}]">
      <IconHeart></IconHeart>
    </div>
    <img class="image" :src="src">
  </div>
</template>

<script>
import IconHeart from './IconHeart'

import { mapMutations } from 'vuex'

export default {
  name: 'DogImage',
  components: {
    IconHeart
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    isFav: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapMutations(['addToFavourites', 'removeFromFavourites']),
    toggleFavourite (image) {
      return this.isFav
        ? this.removeFromFavourites({image})
        : this.addToFavourites({image})
    }
  }
}
</script>

<style>
  .wrapper {
    position: relative;
    height: 100%;
  }

  .wrapper:hover .iconWrapper{
    opacity: 1;
  }

  .wrapper:hover .image{
      box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14),
      0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  }
  .iconWrapper {
    position: absolute;
    transition: opacity .4s;
    opacity: 0;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .iconWrapper {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid;
    border-color: black;
    background: rgba(255, 255, 255, 0.4);
  }

  .iconWrapper.favourite {
    border-color: #C03A2B;
  }

  .iconWrapper svg{
    width: 30px;
    height: 30px;
  }

  .favourite path {
    fill: #C03A2B;
  }

  .image {
    transition: box-shadow .2s;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 35px;

    box-shadow:0px 1px 8px 0px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14),
    0px 3px 3px -2px rgba(0, 0, 0, 0.12);
  }
</style>
