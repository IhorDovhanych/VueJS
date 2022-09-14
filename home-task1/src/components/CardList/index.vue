<template>
    <div class="Card-list">
        <card-base v-for="item in iconsList"
        :key="item.id"
        :imgSrc="item.imgSrc"
        :title="item.title"
        :place="item.place"
        :time="item.time"
        :price="item.price"
        :currency="item.currency"
        :order="item.order"
        />
    </div>
</template>

<script>
    import CardBase from "./CardBase.vue"

    export default {

        name: "CardList",

        components: {
            CardBase,
        },

        props: {
            iconsList: {
                type: Array,
                default: () => [],
            },
        },
    }
</script>

<style lang="css" scoped>
.Card-list{
    display: flex;
    
}
</style>