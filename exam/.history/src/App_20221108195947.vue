<template>
  <div>
    <BooksTable :listData="list"/>
    
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