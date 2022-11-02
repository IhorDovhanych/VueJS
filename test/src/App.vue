<template>
  <div>
    <check-box-table :checkBoxList="listData"/>
  </div>
</template>

<script>
  import checkBoxTable from '@/components/checkBox'

  export default {
  
  components: {
    checkBoxTable
  },
  

  data(){
    return{
      listData: [
        {
          id: 1,
          title: "ok",
          checked: false
        },
        {
          id: 2,
          title: "ok2",
          checked: false
        }
      ]
    }
  }
    
  }
</script>

<style lang="css" scoped>

</style>