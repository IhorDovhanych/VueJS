<template>
    <div>
        <BagConstructorItem :bagConstructorItem="List"/>
        <input type="text" v-model="ll">
        {{ll}}
    </div>
</template>

<script>
    import BagConstructorItem from'@/components/BagItem';
    import store from "../store";
    export default {
        components:{
            BagConstructorItem,
        },
        computed: {
            List() {
                return store.getters.getBagList;
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>