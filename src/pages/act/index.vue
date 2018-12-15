<template>
  <div class="counter-warp">
    <i-card full="true" title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
      <view slot="content">内容不错</view>
      <view slot="footer">尾部内容</view>
    </i-card>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
