<template>
    <div class="parent">
        <div>
            Parent component
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

export default {
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
