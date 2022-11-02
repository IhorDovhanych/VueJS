<template>
    <div>
        <div class="ShopItem">
            <div class="name">{{name}}</div>
            <button v-on:click="getAddToBag(id)">+</button>
            <img :src="ImgSrc" class="img"/>
            
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: 'ShopItem',
        methods: {
            ...mapActions(['getAddToBag'])
        },
        props: {
            id:{
                type: Number,
                default: 0
            },
            ImgSrc: {
                type: String,
                default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uNtyVcDaYAdyQXPxd-3FyckRMuUMjCyN9A&usqp=CAU" 
            },
            name:{
                type: String,
                default: "none name value"
            }
        },
    }
</script>

<style lang="scss" scoped>

.ShopItem{
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
    width: 300px;
    height: 200px;
    color: white;
    overflow: hidden;
    border-radius: 300px;
    display: flex;
    justify-content: center;
   
    img{
        width: 300px;
        height: 200px;
        object-fit: cover;
    }
    button{
        position: absolute;
        margin-top: 160px;
        padding: 5px 10px;
        font-size: 20px;
        border-radius: 30px;
        border: 0px;
        background-color: #6283F5;
        color:white;
        opacity: 0.5;
        cursor: pointer;
        transition: 0.2s;
    }
    button:hover{
        opacity: 1;
        color:white;
    }
    .name{
        opacity: 0;      
        visibility: inherit;
        font-size: 20px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 100%);
        padding: 30px 120px 100px 120px;
        position: absolute;
        transition: 0.2s;
    }
}
.ShopItem:hover{
    .name{
        opacity: 1;
    }
}

</style>