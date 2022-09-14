<template>
    <div class="Icons-table">

        <icon-card v-for="item in iconsTable"
        :key="item.id"
        :img-src="item.imgSrc"
        :name="item.name"
        />

    </div>
</template>

<script>
    import IconCard from './IconCard.vue'

    export default {
        name: 'IconsTable',

        components: {
            IconCard,
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
.Icons-table{
    display: flex;
    
}
</style>