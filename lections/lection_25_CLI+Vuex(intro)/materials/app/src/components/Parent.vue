<template>
    <div class="parent">
        <div>
           Hello user --> {{ getUserName }}


           {{foo}}
        </div>
        <div class="parent__container">
            <BoxFirst></BoxFirst>
            <BoxSecond></BoxSecond>
        </div>
    </div>
</template>

<script>
import BoxFirst from '@/components/BoxFirst';
import BoxSecond from '@/components/BoxSecond';
import { mapGetters, mapActions, mapMutations } from 'vuex';

// console.log(...mapGetters(['getUserName']))

export default {
    computed: {
        ...mapGetters(['getUserName', 'foo'])
    },
    components: {
        BoxFirst: BoxFirst,
        BoxSecond: BoxSecond
    }
}
</script>

<style lang="scss">
.parent {
    border: 1px solid black;
    font-size: 40px;
    &__container {
        display: flex;
    }
}
</style>
