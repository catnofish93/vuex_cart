import {getAllgoods,buygoods} from "../../api/index.js"
const state={
    goods:[]
}
const getters={
    getAllGoods:()=>{
        state.goods=getAllgoods();
    }
}
const actions={
    addcart:(state)=>{
        
    }
}