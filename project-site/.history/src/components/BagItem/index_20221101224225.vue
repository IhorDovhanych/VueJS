<template>
    <div>
        <h1>My bag</h1>
    <div class="BagItemConstructor">
        <BagItem v-for="item in bagConstructorItem"
        :key="item.id"
        :id="item.id"
        :ImgSrc="item.ImgSrc"
        :name="item.name"
        :size="item.size"
        :material="item.material"
        :price="item.price"
        :count="item.count"
        />
    
    </div>
</div>
</template>

<script>
    import BagItem from './BagItem.vue'

    export default {
        name: 'BagConstructItem',

        components: {
            BagItem,
        },

        props: {
            bagConstructorItem: {
                type: Array,
                default: () => [],
            }
        }
        
    }
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');
h1{
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    margin-top: 50px;
    margin-left: 230px
}
.BagItemConstructor{
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    margin-left: 300px;
    margin-top: 40px;
    margin-bottom: 50px;
}
</style>