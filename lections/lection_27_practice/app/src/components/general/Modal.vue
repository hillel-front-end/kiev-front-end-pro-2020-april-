<template>
    <div id="modal1" class="modal open" ref="modal">
        <div class="modal-content">
            <div class="header">
                <slot name="header"></slot>
            </div>
            <div class="main-content">
                <slot name="content"></slot>
            </div>
        </div>
        <div class="modal-footer">
            <slot name="footer"></slot>
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            modal: null
        }
    },
    mounted() {
        M.Modal.init(this.$refs.modal);
    }
}
</script>

<style lang="scss">

</style>