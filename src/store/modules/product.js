import shop from "../../api/index.js"
const state={
    goods:[]
}
const getters={
}
const actions={
    getAllProducts({commit}){
        shop.getAllgoods(products=>{
            console.log(products)
            commit("setProducts",products)
        })
    }
}
const mutations={
    setProducts(state,products){
        state.goods=products
    },
    decrementProductInventory(state,{id}){
        const product=state.goods.find(product=>product.id===id);
        product.inventory--
    }
}
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}