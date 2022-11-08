<template>
<div class="Books">
    <div class="BooksTable">
        <BookBase v-for="item in listData"
        :key="item.id"
        :id="item.id"
        :imgSrc="item.imgSrc"
        :name="item.name"
        :authors="item.authors"
        :publisher="item.publisher"
        :genre="item.genre"
        :price="item.price"
        :able="item.able"
        />
    </div>
</div>
</template>

<script>
    import BookBase from "./BookBase.vue"
    export default {
        name: "BooksTable",
        components: {
            BookBase
        },
        methods: {
            name() {
                
            }
        },
        props: {
            listData: {
                type: Array,
                default: () => []
            },
        },
    }
</script>

<style lang="scss" scoped>
.BooksTable{
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.Books{
    display: flex;
    justify-content: center;
}
</style>