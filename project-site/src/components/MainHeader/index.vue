<template>
    <div class="MainHeader">
        <header-elements v-for="item in iconsTable"
        :key="item.id"
        :logo-img="item.logoImg"
        />

    </div>
</template>

<script>
    import HeaderElements from './HeaderElements.vue'

    export default {
        name: 'MainHeader',

        components: {
            HeaderElements,
        },

        props: {
            iconsTable: {
                type: Array,
                default: () => [],
            }
        }
        
    }
</script>

<style lang="css" scoped>

</style>