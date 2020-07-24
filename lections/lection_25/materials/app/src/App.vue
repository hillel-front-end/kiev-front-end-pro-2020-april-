<template>
  <div class="app">
    <navigation />

    <span 
        :class="cssSelector"
        @click="onClick">{{foo}}</span>
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  data() {
    return {
      foo: 123,
      cssSelector: 'app__btn'
    }
  },
  methods: {
    onClick() {
      console.log('click');
    }
  },
  components: {
    Navigation: Navigation
  }
}
</script>

<style lang="scss">
  .app {
    border: 1px solid red;
    padding: 10px;
    background: black;
    color: red;

    &__btn {
      border: 1px solid red;
      padding: 10px;
      display: inline-block;
      cursor: pointer;
    }
  }
</style>
