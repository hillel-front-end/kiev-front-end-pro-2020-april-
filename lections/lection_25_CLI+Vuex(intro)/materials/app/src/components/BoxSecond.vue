<template>
    <div class="box-second">
        Box Second
        <button @click="asyncGetData"> send </button>
        <input type="text" @input="input" v-model="text">
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        input() {
            // this.$store.commit('setFoo', this.text);
            this.setFoo(this.text);

        },
        asyncGetData() {
            // this.$store.dispatch('asyncSetFoo', 123)
            this.asyncSetFoo(123);
        },
        ...mapActions(['asyncSetFoo']),
        ...mapMutations(['setFoo'])
    }
}
</script>

<style lang="scss">
.box-second {
    border: 1px solid red;
    width: 500px;
    height: 500px;
}
</style>
