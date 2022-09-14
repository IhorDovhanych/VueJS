<template>
  <div>
    <div class="Icon-container">
      <div class="Icon-switch">
        <button @click="OnClick">+</button>
      </div>
      <div class="Icon-img">
        <img :src="imgSrc">
      </div>
      <div class="Icon-name">
        {{ name }}
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'IconCard',

    props: {
      imgSrc: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/800px-Google_Chrome_icon_%28February_2022%29.svg.png'
      },
      name: {
        type: String,
        default: 'chrome'
      }
    },
    
  }
</script>

<style lang="css" scoped>
.Icon-container{
  width: 60px;
  text-align: center;
  margin: 10px;
  background-color: rgb(238, 238, 238);
  padding: 10px;
  border-radius: 5px;
}
.Icon-img img{
  background-color: white;
  border-radius: 50%;
  width: 50px;
  overflow: hidden;
}
.Icon-switch{
  text-align: right;
}
.Icon-container .Icon-switch button:active {
  background-color: rgb(239, 15, 15);
}



</style>