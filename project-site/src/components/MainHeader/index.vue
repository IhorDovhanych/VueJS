<template>
    <div class="MainHeader">
        <header-elements v-for="item in headerElement"
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
            headerElement: {
                type: Array,
                default: () => [],
            }
        }
        
    }
</script>

<style lang="css" scoped>

</style>