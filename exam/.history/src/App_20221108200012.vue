<template>
  <div>
    <BooksTable :listData="list"/>
    <input type="text" v-model="imgSrc"/> <br>
    <input type="text" v-model="name"/> <br>
    <input type="text" v-model="authors"/> <br>
    <input type="text" v-model="publisher"/> <br>
    <input type="text" v-model="genre"/> <br>
    <input type="number" v-model="pricce"/> <br>

    <button v-on:click="addItem([imgSrc,name,authors,publisher,genre,pricce])">Add</button>
    <button v-on:click="ok">A</button>
  </div>
</template>

<script>
import BooksTable from "@/components/BooksTable"
import { mapGetters, mapActions } from 'vuex'
  export default {
    name: "App",
    methods:{
      ...mapActions(['addItem']),
      ok(){
        console.log(this.list)
      }
    },
    components: {
      BooksTable
    },
    computed: {
      ...mapGetters(['list']),
    },
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');
*{
  font-family: 'Ubuntu', sans-serif;
}
</style>