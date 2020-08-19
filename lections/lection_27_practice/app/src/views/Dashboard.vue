<template>
   <div class="dashboard">
      <div class="dashboard__header">
         <app-header></app-header>
      </div>
      <div class="dashboard__content" :class="{'dashboard__full-width': $store.getters.IS_FULL}">
         <div class="dashboard__navigation"></div>
         <div class="dashboard__products-content"></div>
      </div>
   </div>
</template>

<script>
    import Header from '@/components/static/Header.vue'
    export default {
        name: 'Dashboard',
        components: {
            appHeader: Header
        }
    }
</script>

<style lang="scss">
   .dashboard{
      &__content {
         position: relative;
         height: calc(100vh - 100px);
         padding-top: 10px;
      }

      &__products-content {
         height: 100%;
         border: 1px solid green;
         margin-left: 30%;
         transition: all .5s;
      }

      &__navigation {
         position: absolute;
         top: 10px;
         left: 0px;
         border: 3px solid blue;

         width: 30%;
         height: 100%;
         transition: all .5s;
      }

      &__full-width &__navigation {
         left: -30%;
      }

      &__full-width &__products-content {
         margin-left: 0px;
      }
   }
</style>