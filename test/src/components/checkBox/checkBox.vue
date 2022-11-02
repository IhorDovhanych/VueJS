<template>
  <div>
     <p> {{title}} : <button @click="$emit('visible')">X</button> <!--<input type="checkbox" name="CheckBox" :checked="this.checked"></p> -->
  </div>
</template>

<script>
  export default {
    name: "CheckBox",
    
    props: {
        title: {
        type: String,
        default: "Випити каву" 
      },
      checked: {
        type: Boolean,
        default: false
      }
  },
}

  
</script>

<style lang="css" scoped>
.hide{
  visibility: hidden;
}
</style>