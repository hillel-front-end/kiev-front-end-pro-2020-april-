<template>
  <div class="hello">
      <base-app> 
        <template v-slot:header>
          <span class="base-app__logo">Header</span> 
        </template>
        <template v-slot:content>
          <span class="base-app__content">Content</span> 
        </template>
        <template v-slot:footer>
          <span class="base-app__footer">Content</span> 
        </template>
      </base-app>

      
      <hr/>

      <base-app> 
        <template v-slot:header>
          <span class="base-app__logo">AAAAAAAAAAAAAA</span> 
        </template>
        <template v-slot:content>
          <span class="base-app__content">bBBBBBBBBBBBB</span> 
        </template>
        <template v-slot:footer>
          <span class="base-app__footer">cccccCCCCCCCCC</span> 
        </template>
      </base-app>

      <input type="text" v-model="foo">
      <button @click="goTo">go to</button>
  </div>
</template>

<script>
import BaseApp from './BaseApp.vue';

export default {
  name: 'HelloWorld',
  components: {
    BaseApp: BaseApp
  },
  data() {
    return {
      foo: ''
    }
  },
  methods: {
    goTo() {
      let path = '';
      path = this.foo.length > 10? 'about' : 'foo'; 

      // this.$router.push();
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
