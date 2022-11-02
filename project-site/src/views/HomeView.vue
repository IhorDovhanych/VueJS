<template>
  <div class="home">
    
    <div class="welcome-banner">

        <div class="banner-content">
          <div> Welcome to </div>
        <div class="logo"> Chef </div>
      </div>
   </div>
    
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lily+Script+One&family=Limelight&display=swap');

.home{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.welcome-banner{
  user-select: none;
  width: 70%;
  margin-top: 35px;
  height: 500px;
  background-color: red;
  color:white;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.4);
  border-radius: 90px;
  background-image: url('@/assets/banner-bg.jpg');
  background-size: 1200px;
  background-position: -100px -100px;
  .banner-content{
    display: flex;
    justify-content: center;
    vertical-align: middle;
    height: 60px;
    margin-top: calc(250px - 60px/2);
    font-family: 'Limelight', cursive;
    font-size: 30px;
    :first-child{
      margin-right: 10px;
      margin-top: 25px;
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
    }
    .logo{
      margin-top: 0px;
      margin-left: 10px;
      font-family: 'Lily Script One', cursive;
      font-size: 60px;
      text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
    }
  }

}
</style>