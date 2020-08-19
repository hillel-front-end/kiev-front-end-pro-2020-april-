<template>
   <app-modal>
      <template v-slot:header>
         <h2>Регистрация</h2>
      </template>

      <template v-slot:content>
         <app-registration-content></app-registration-content>
      </template>

      <template v-slot:footer>
         <a href="#!"
            @click="onSave"
            :class="{'modal-close': isValid}"
            class=" waves-effect waves-green btn-flat"
         >save</a>

         {{isValid}}
      </template>
   </app-modal>
</template>

<script>
    import Modal from '@/components/general/Modal.vue'
    import RegistrationContent from "./RegistrationContent";
    import { mapGetters } from "vuex";

    export default {
        components: {
            appModal: Modal,
            appRegistrationContent: RegistrationContent
        },
        data() {
            return {
                isClose: false
            }
        },
        computed: {
            ...mapGetters(['GET_REG_INFO']),
            isValid() {
                return (Object.keys(this.GET_REG_INFO)).length == 4;
            }
        },
        methods: {
           async onSave() {
                if (this.isValid) {
                    console.log('valid')
                    const isSuccess = this.$store.dispatch('asyncSubmitRegistration', this.GET_REG_INFO);
                    if(isSuccess) this.isClose = true;
                }
            }

        }
    }
</script>