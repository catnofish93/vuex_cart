<template>
  <div>
    <div>Shopping Cart Example</div>
    <div>
      <div>Products</div>
      <ul>
        <li>
          <div>ipad4 Mini-$500.01</div>
          <button>Add to cart</button>
        </li>
        <li>
          <div>H&M T-shirt White-$10.99</div>
          <button>Add to cart</button>
        </li>
        <li>
          <div>Charli XCX-Sucker CD-$19.99</div>
          <button>Add to cart</button>
        </li>
      </ul>
    </div>
    <div>
      <div>Your Cart</div>
      <ul>
        <li><span>ipad 4 Mini-$500.01×</span>2</li>
        <li><span>H&M T-Shirt White-$10.99×</span>5</li>
      </ul>
      <div>Total:$1,054.97</div>
      <button>checkout</button>
    </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex"
export default {
    computed:mapGetters([
      'count',
      "recentHistory"
    ]),
    methods:mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ])
}
</script>
<style lang="scss">

</style>
