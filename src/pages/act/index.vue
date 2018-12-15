<template>
  <div class="page">
    <ul>
      <li class="list" v-for="(item, itemIndex) in cards" v-bind:key="itemIndex">
        {{item.value}}
        <i-card
          full="true"
          v-bind:title="item.name"
          v-bind:thumb="item.avatar"
          extra="回复了你"
        >
          <view slot="content">{{item.res}}</view>
          <!-- <view slot="footer">{{item.answer}}</view> -->
        </i-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [{
        name: "混子队长",
        avatar: "https://i.loli.net/2017/08/21/599a521472424.jpg",
        res: "神回复",
      },{
        name: "混子队友",
        avatar: "https://i.loli.net/2017/08/21/599a521472424.jpg",
        res: "神回复",
      },{
        name: "混子队长",
        avatar: "https://i.loli.net/2017/08/21/599a521472424.jpg",
        res: "神回复",
      }]
    };
  },
  created() {},
  methods: {
  }
};
</script>

<style>
.page {
  background: #f3f3f3;
  min-height: 100vh;
}
ul {
  overflow: hidden;
}
.list {
  margin: 20rpx 0;
}
</style>
