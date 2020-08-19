<template>
   <header class="header">
      <button class="header__button" @click="toggleNav">{{this.IS_FULL? 'close' : 'open'}}</button>
   </header>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        methods: {
            toggleNav() {
                this.$store.commit('SET_FULL', !this.IS_FULL)
            }
        },
        computed: {
            ...mapGetters(['IS_FULL'])
        }
    }
</script>

<style lang="scss">
   .header {
      border: 1px solid red;
      height: 100px;
      text-align: left;

      &__button {
         font-size: 30px;
      }
   }
</style>