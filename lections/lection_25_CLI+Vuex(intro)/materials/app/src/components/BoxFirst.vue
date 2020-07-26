<template>
    <div class="box-first">
        Box First
        <button @click="onclick"> click</button>
       <br /> 
       data from store -->
       {{$store.state.foo}}
    </div>
</template>

<script>

export default {
    methods: {
        onclick() {
            console.log(this.$store.state.foo, ' this.$store')
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
