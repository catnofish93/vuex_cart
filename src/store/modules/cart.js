import shop from "../../api/index.js"
const state={
    items:[],
    checkoutStatus:null
}
const getters={
    cartProducts:(state,getters,rootState)=>{
        return state.items.map(({id,quantity})=>{
            const product=rootState.products.goods.find(product=>product.id===id)
            console.log(product)
            return {
                name:product.name,
                price:product.price,
                quantity
            }
        })
    },
    cartTotalPrice:(state,getters)=>{
        return getters.cartProducts.reduce((total,product)=>{
            return total+product.price*product.quantity
        },0)
    }
}
const actions={
    checkout({commit,state},products){
        const savedCartItems=[...state.items]
        // commit("setCheckoutStatus",null)
        commit("setCartItems",{items:[]})

        shop.buygoods(
            products,
            ()=>commit("setCheckoutStatus","successful"),
            ()=>{
                commit("setCheckoutStatus","faileed")
                commit('setCartItems',{items:savedCartItems})
            }
        )
    },
    addProductToCart({state,commit,rootState},product){
        commit("setCheckoutStatus",null)
        if(product.inventory>0){
            const cartItem=state.items.find(items=>items.id===product.id)
            if(!cartItem){
                commit("pushProductToCart",{id:product.id});
            }else{
                commit("incrementItemQuantity",cartItem)
            }
            commit('products/decrementProductInventory',{id:product.id},{root:true})
        }
        console.log(state)
    }
}
const mutations={
    pushProductToCart(state,{id}){
        state.items.push({
            id,
            quantity:1
        })
    },
    incrementItemQuantity(state,{id}){
        const cartItem=state.items.find(items=>items.id===id);
        cartItem.quantity++
    },
    setCartItems(state,{items}){
        state.items=items;
    },
    setCheckoutStatus(state,status){
        console.log(status)
        state.checkoutStatus=status
    }
}
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}