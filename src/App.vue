<template>
  <div>
    <div style="color:#999999;font-size:30px;border: 1px solid #e8e8e8;border-bottom:none;width:350px">Shopping Cart Example</div>
    <div>
      <a-card title="Products">
      <ul>
        <li v-for="product in products"
          :key="product.id">
          <div>{{product.name}}-{{product.price|currency}}</div>
          <a-button :disabled="product.inventory===0" @click="addProductToCart(product)">Add to cart</a-button>
        </li>
      </ul>
    </a-card>
    </div>
    <div>
      <a-card title="Your Cart">
      <ul>
        <li v-for="item in products1" :key="item.id"><span>{{item.name}}×</span>{{item.quantity}}</li>
      </ul>
      <div>Total：{{total|currency}}</div>
      <a-button @click="checkout(products1)">checkout</a-button>
      </a-card>
      <div v-show="checkstatus">{{checkstatus}}</div>
    </div>
  </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from "vuex"
export default {
    computed:{
      ...mapState({
        products:state=>{
          return state.products.goods
        },
        checkstatus:state=>{
          console.log(state)
          return state.cart.checkoutStatus
        }
      }),
      ...mapGetters("cart",{
        products1:"cartProducts",
        total:"cartTotalPrice"
      })
    },
    methods:{
      ...mapActions('cart',[
        'addProductToCart',
        "checkout"
      ]),
    },
    created(){
      this.$store.dispatch('products/getAllProducts')
    }
}
</script>
<style lang="scss">
  ul{
    list-style: none
  }
  .ant-card{
    width: 350px
  }
</style>
