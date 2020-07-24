<template>
    <button @click="foo()" class="btn">click +</button>
</template>

<script>
export default {
    methods:{
        foo() {
         console.log('click');
        }
    }
}
</script>

<style lang="scss">
    .btn {
        padding: 10px;
    }
</style>