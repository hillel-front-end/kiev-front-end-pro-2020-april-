<template>
    <div class="box-first">
        Box First
        <button @click="onclick"> click</button>
       <br /> 
       data from store -->
       {{$store.state.foo}}
       {{briz}}
    </div>
</template>

<script>

export default {
    data() {
        return {
            briz: 123
        }
    },
    methods: {
        onclick() {
            console.log(this.$store.state.foo, ' this.$store')
            this.briz
        }
    }
}
</script>

<style lang="scss">
.box-first {
    border: 1px solid red;
    width: 500px;
    height: 500px;
}
</style>
