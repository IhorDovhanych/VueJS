<template>
  <div>
    <main-header :main-header="listData"/>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader"
  
  export default {
  name:"App", 
  
  components: {
    MainHeader,
  },

  data() {
    return {
      listData: [
        {
          id:1,
          logoImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png",
        },
      ],
    }
  },
  }
</script>

<style lang="scss" scoped>

</style>



