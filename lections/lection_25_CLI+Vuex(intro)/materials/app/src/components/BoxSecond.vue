<template>
    <div class="box-second">
        Box Second
        <button> send </button>
        <input type="text" @input="input" v-model="text">
    </div>
</template>

<script>

export default {
    data() {
        return {
            text: ''
        }
    },
    methods: {
    input() {
        this.$store.commit('setFoo', this.text);
    }
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
