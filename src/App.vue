<template>
  <div id="app">
    Clicked:{{$store.state.count}}times,count is {{count}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <div>历史记录{{recentHistory}}</div>
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
