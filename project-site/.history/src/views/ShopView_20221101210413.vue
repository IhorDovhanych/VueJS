<template>
  <div>
    <h1 class="ShopTitle">Shop</h1>

    <ShopItemConstructor :shopConstructorList="List" class="ShopItemConstructor"/>
  </div>
</template>

<script>

import ShopItemConstructor from "@/components/ShopItem";
import store from '../store';
  export default {
    components: {
      ShopItemConstructor
    },
    computed: {
      List() {    
        return store.state.itemsList;
      }
    },
    
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap');
*{
  font-family: 'Montserrat', sans-serif;
}
h1{
    font-weight: normal;
    margin-top: 50px;
    margin-left: 230px
}
</style>