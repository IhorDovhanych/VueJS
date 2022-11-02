import { createStore } from 'vuex'

const store = createStore({
    mutations: {
      addToBag(state,userId){
        console.log(userId);

        for(let i = 0; i < this.state.itemsList.length; i++){
          if(userId == this.state.itemsList[i].id){
            this.bagList.push(this.state.itemsList[i]);
            console.log(userId);
          }
        }
      }
    },
    actions:{
      getAddToBag({commit}, userId){
        console.log(userId)
        commit("addToBag", userId)
      }

    },
    state:{
        bagList:[

        ],
        itemsList: [
            {
                id:1,
                ImgSrc:"https://johnlewis.scene7.com/is/image//JohnLewis/cooking_baking_cooking_utensils_block_mob_040822",
                name:"Cookware set",
                size:"300mm x 450mm x 50mm",
                material:"Steal",
                price: 90,
                count: 1
              },
              {
                id:2,
                ImgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uNtyVcDaYAdyQXPxd-3FyckRMuUMjCyN9A&usqp=CAU",
                name:"Blue pan",
                size:"300mm x 450mm x 50mm",
                material:"Ceramic",
                price: 35,
                count: 1
              },
              {
                id:3,
                ImgSrc:"https://i.pinimg.com/564x/d0/39/83/d039833c8e338a96f3e7935a1d5cb730.jpg",
                name:"Green pan with cock",
                size:"400mm x 200m 80mm",
                material:"Ceramic",
                price: 40,
                count: 1
              },
              {
                id:4,
                ImgSrc: "https://i.pinimg.com/564x/1f/da/29/1fda29482c79e9200bceaf72da887605.jpg",
                name: "Red pumpkin-shaped pan",
                size: "400mm x 200m 80mm",
                material:"Ceramic",
                price: 55,
                count: 1
              },
              {
                id:5,
                ImgSrc: "https://i.pinimg.com/564x/e2/34/e4/e234e43871b9b734a610d05da3df26b3.jpg",
                name: "Minimalistic cookware set",
                material: "Steal",
                size: "1400mm x 1200m 180mm",
                price: 140,
                count: 1
              },
              {
                id:6,
                ImgSrc: "https://i.pinimg.com/564x/9c/31/44/9c31441e9173592a0e08bd6661c1cec4.jpg",
                name: "Copper canister",
                material: "Copper",
                size: "200mm x 200m 80mm",
                price: 100,
                count: 1
              }
        ]
    },
    getters: {
        getItemList: (state) => state.itemsList,
        getBagList: (state) => state.bagList
    }

})

export default store;