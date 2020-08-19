<template>
   <div class="registration">
      <div class="content__inner">
         <div class="row">
            <form class="col s12" @submit.prevent>
               <div class="row">
                  <div class="input-field col-12" v-for="(field, key) in credentials" :key="key">
                     <input :id="key"
                            type="text"
                            v-model="credentials[key]"
                            @input="onInput(key)"
                     >
                     <label :for="key">{{key}}</label>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
       data() {
           return {
               credentials: {
                   login: '',
                   password: '',
                   email: '',
                   address: ''
               }
           }
       },
       methods: {
           onInput(key) {
               this.$store.commit('SET_REG_INFO', {
                   [key]: this.credentials[key]
               });
           }
       }
   }
</script>