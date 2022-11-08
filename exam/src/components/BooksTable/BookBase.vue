<template>
  <div class="BookBase">
    <img :src="imgSrc" />
    <div class="info">
      <h2>{{ name }}</h2>
      <div class="text-list">
        <div>Автори:</div>
        <div v-for="items in authors" :key="items">{{ items }},</div>
      </div>
      <div class="text-list">
        <div>Видавництво:</div>
        <div>{{ publisher }}</div>
      </div>
      <div class="text-list">
        <div>Жанр:</div>
        <div v-for="items in genre" :key="items">{{ items }},</div>
      </div>
      <div class="text-list" v-if="able">
        <div>Ціна:</div>
        <div>{{ price }}$</div>
      </div>
      <div v-else>
        Відсутній у продажі
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BookBase",
  methods: {
    ...mapActions(["minusItemCount", "plusItemCount"]),
  },

  props: {
    id: {
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: "Miss image src",
    },
    name: {
      type: String,
      default: "Miss name value",
    },
    authors: {
      type: Array,
      default: () => ["Miss authors value"],
    },
    publisher: {
      type: String,
      default: "Miss publisher",
    },
    genre: {
      type: Array,
      default: () => ["Miss genre"],
    },
    price: {
      type: Number,
      default: 0,
    },
    able: {
        type: Boolean,
        default: true
    }
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0px;
  padding: 0px;
}
.BookBase {
  display: flex;
  background-color: rgb(229, 247, 255);
  width: 600px;
  justify-content: flex-start;
  border-radius: 0px 60px;
  overflow: hidden;
  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
  }
  .info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 30px;
      width: 370px;
      margin-bottom: 40px;
    }
    .text-list {
      display: flex;
      gap: 4px;
      margin-bottom: 10px;
    }
  }
}
</style>
