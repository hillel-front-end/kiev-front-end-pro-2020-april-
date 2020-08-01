<template>
  <div class="base-app">
      <!-- <slot></slot> -->

      <div class="base-app__header">
          <slot name="header"></slot>
      </div>

      <div class="base-app__content">
          <slot name="content"></slot>
      </div>

      <div class="base-app__footer">
          <slot name="footer"></slot>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'BaseApp',
  data() {
      return {
          app: '1.0.0'
      }
  },
  computed: {
      getFoo() {
          return this.$store.getters.getFoo;
      }
  },
  methods: {
      ...mapMutations(['SET_FOO']),
      setFoo() {
          this.SET_FOO('Hello front-end pro');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .base-app{
        border: 1px solid red;

        &__header, &__content, &__footer{
            border-bottom: 1px solid #000;
        }
    }
</style>
