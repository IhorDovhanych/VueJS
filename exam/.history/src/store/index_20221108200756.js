import { createStore } from "vuex";

const store = createStore({
    state: {
        list: [
            {
              id:1,
              imgSrc: "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/sherlock-series-4-iconic-i33910.jpg",
              name: "Sherlok Homes",
              authors: ["Артур Ігнатіус"],
              publisher: "Великобританія",
              genre: ["Детектив"],
              price: 400000,
              able: true
          },
          {
            id:2,
            imgSrc: "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/sherlock-series-4-iconic-i33910.jpg",
            name: "Sherlok Homes",
            authors: ["Артур Ігнатіус", "Ігор Довганич"],
            publisher: "Великобританія",
            genre: ["Детектив", "Фентезі" ],
            price: 40,
            able: false
        }
        
        ]
    },
    getters: {
        list: state => {
            return state.list;
        }
    },
    mutations: {
      addItem(state, arr){
        state.list.push({
            id: state.list.length,
            imgSrc: arr[0],
            name: arr[1],
            authors: arr[2].split(","),
            publisher: arr[3],
            genre: arr[4].split(","),
            price: arr[5],
            able: true
        })
      } 
    },
    actions: {
        addItem({commit}, arr) {
            commit('addItem', arr);
        }
    }
});

export default store;