<template>
    <div class="ShopItemConstructor">

        <ShopItem v-for="item in shopConstructorList"
        :key="item.id"
        :id="item.id"
        :ImgSrc="item.ImgSrc"
        :name="item.name"
        class="ShopItem"
        />
    </div>
</template>

<script>
    import ShopItem from "./ShopItem.vue";

    export default {
        name: "ShopItemConstructor",

        components: {
            ShopItem,
        },

        props: {
            shopConstructorList: {
                type: Array,
                default: () => []
            },
        },
        }
</script>

<style lang="scss" scoped>
.ShopItemConstructor{
    margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;  
  width: 70%;
  margin-left: 15%;
  justify-items: center;
}
</style>