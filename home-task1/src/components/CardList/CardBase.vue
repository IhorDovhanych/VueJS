<template>
  <div>
    <div class="Card-container">
      <div class="Card-img">
        <img :src="imgSrc">
      </div>
      <div class="Card-order">
        <img src="https://cdn3.iconfinder.com/data/icons/e-commerce-vol-interactions/80/package-order-ready-checkmark-512.png">
      </div>
      <div class="Card-title">
        {{title}}
        <br>
          <div class="Card-date">
            {{place}} - {{time}}
          </div>
      </div>
      <div class="Card-price">
        {{price}} {{currency}}

        <button>+</button>
      </div>
    
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardBase",

    props: {
      imgSrc: {
        type: String,
        default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.natgeofe.com%2Fk%2F5b396b5e-59e7-43a6-9448-708125549aa1%2Fnew-york-statue-of-liberty_16x9.jpg&imgrefurl=https%3A%2F%2Fkids.nationalgeographic.com%2Fgeography%2Fstates%2Farticle%2Fnew-york&tbnid=DDh6E6cV3vIOzM&vet=12ahUKEwiQwrv_35P6AhXG6CoKHQRhCx8QMygIegUIARDMAQ..i&docid=ZEVfAcTLZ0-ZwM&w=3072&h=1728&q=new%20York&ved=2ahUKEwiQwrv_35P6AhXG6CoKHQRhCx8QMygIegUIARDMAQ",
      },
      title: {
        type:String,
        default:"Товар",
      },
      place:{
        type:String,
        default:"Ужгород",
      },
      time:{
        type:String,
        default: "Сьогодні 00:00",
      },
      price: {
        type:Number,
        default: 10,
      },
      currency: {
        type:String,
        default: "грн",
      },
      order: {
        type: Boolean,
        default: false,
      }
    },

  }
</script>

<style lang="css" scoped>
.Card-container{
  width: 430px;
  background-color: white;
  box-shadow: 0px 0px 10px black;
  text-align: center;
  margin: 10px;
}
.Card-img{
  width: 400px;
  height: 200px;
  overflow: hidden;
  border-style: solid;
  border: 0px;
}
.Card-img img{
  min-height: 400px;
  min-width: 200px;
  text-align: center;
}
.Card-order img{
  width: 30px;
}
</style>
