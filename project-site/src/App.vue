<template>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <div class="header">
    <div class="logo">Chef</div>
    <span class="line"> </span>
    <nav>
      <router-link class="header-nav" to="/">Main</router-link>
      <router-link class="header-nav" to="/shop">Shop</router-link>
      <router-link class="shoping-bag-nav" to="/bag"><span class="material-symbols-outlined"> shopping_bag </span></router-link>
    </nav>
  </div>
  <router-view> </router-view> 
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lily+Script+One&family=Limelight&display=swap');
*{
  padding: 0px;
  margin: 0px;
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
.header{
  height: 100px;
  background-color: #553AA0;
  .logo{
    user-select: none; 
    margin-left:30px;
    top: 10px;
    font-family: 'Lily Script One', cursive;
    color:white;
    font-size: 60px;
    position: absolute;
  }
  .header-nav{
    vertical-align: middle;
  }
}

nav {
  margin-top: 0px;
  display: flex;
  justify-content: flex-end;
  .header-nav{
    user-select: none; 
    height: 30px;
    margin-top: 25px;
    font-family: 'Limelight', cursive;
    font-size: 25px;
    color: #553AA0;
    text-decoration: none;
    padding: 10px 20px 10px 20px;
    background-color: white;
    border-radius: 50px;
    transition: 0.2s;
  }
  .header-nav:first-child{
    margin-right: 35px;
  }
  .shoping-bag-nav{
    margin-right: 60px;
    margin-top: 15px;
    margin-left: 35px;
    user-select: none; 
    color: #553AA0;
    padding: 15px;
    border-radius: 40px;
    background-color: white;
    transition: 0.2s;
    .material-symbols-outlined{
      font-size: 40px;
      vertical-align: middle;
    }
  }
  .shoping-bag-nav:hover{
    margin-right: 55px;
    margin-top: 11px;
    margin-left: 30px;
    padding: 20px;
  }
  .header-nav:hover{
    margin-top: 20px;
    padding: 15px 20px 15px 20px;
  }
}
</style>
