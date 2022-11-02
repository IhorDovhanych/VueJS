<template>
  <div :class="BagClass" :id="id">
    <div class="img">
      <button class="delete" v-on:click="removeItemFromBag(id)">Remove</button>
      <img :src="ImgSrc" />
    </div>
    <div class="description">
      <h1>{{ name }}</h1>
      <div class="values">
        <h3>Size:</h3>
        <p>{{ size }}</p>
      </div>
      <div class="values">
        <h3>Material:</h3>
        <p>{{ material }}</p>
      </div>
      <div class="values">
        <h3>Price:</h3>
        <p>{{ price * count }}$</p>
      </div>
      <div class="count">
        <button v-on:click="minusItemCountBag(id)">-</button>
        <p>{{ count }}</p>
        <button v-on:click="plusItemCountBag(id)">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BagItem",
  data() {
    return {
      dataCount: this.count,
      BagClass: "BagItem",
    };
  },
  methods: {
    ...mapActions([
      "removeItemFromBag",
      "plusItemCountBag",
      "minusItemCountBag",
    ]),
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
    ImgSrc: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png",
    },
    name: {
      type: String,
      default: "none product name",
    },
    size: {
      type: String,
      default: "none size value",
    },
    material: {
      type: String,
      default: "none material value",
    },
    price: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
.hiden {
  width: 0px;
  height: 0px;
  visibility: hidden;
}

.img {
  width: 300px;
  background-color: transparent;
  height: 200px;

  display: flex;
  padding-right: 30px;
  border-right: 2px solid black;
  margin-right: 20px;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
  
  img {
    object-fit: cover;
    width: 300px;
    height: 200px;
    border-radius: 300px;
  }
  .delete {
    opacity: 1;
    position: absolute;
    justify-content: center;
    height: 50px;
    width: 120px;
    padding: 0px 20px;
    // color: rgb(225, 77, 77);
    // background-color: rgba(255, 255, 255, 0.282);
    font-size: 20px;
    // border: 2px solid rgb(225, 77, 77);
    border-radius: 10px;
    color: white;
    border: 0px;
    background-color: rgb(221, 123, 123);
    margin-left: 90px;
    filter: drop-shadow(0px 0px 5px rgba(225, 77, 77, 0.9));
    margin-top: 175px;
    transition: 0.3s;
    scale: 0.5;
  }
  .delete:hover {
    color: white;
    border-radius: 50px;
    border: 0px;
    background-color: rgb(225, 77, 77);
  }
}
.BagItem {
  display: flex;
  margin-bottom: 80px;
}
.description {
  h1 {
    margin-bottom: 20px;
  }
}
.values {
  display: flex;
  margin: 15px 0px;
  h3 {
    font-weight: normal;
  }
  p {
    margin-top: 3px;
    margin-left: 7px;
  }
}
.count {
  display: flex;
  p {
    justify-content: center;
    width: 15px;
    margin: 2px 10px;
    user-select: none;
  }
  button {
    background-color: transparent;
    border: none;
    padding: 5px;
    cursor: pointer;
    user-select: none;
  }
}
</style>