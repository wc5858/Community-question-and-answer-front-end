<template>
  <div class="page">
    <ul>
      <li class="list" v-for="(item, itemIndex) in cards" v-bind:key="itemIndex">
        {{item.value}}
        <i-card
          full="true"
          v-bind:title="item.name"
          v-bind:thumb="item.avatar"
          extra="点击取消关注"
        >
          <view slot="content">{{item.ups + '赞回答：' +item.question}}</view>
          <view slot="footer">{{item.answer}}</view>
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
        question: "计网作业不想做了怎么办",
        answer: "让组员去做",
        ups: 100
      },{
        name: "混子队友",
        avatar: "https://i.loli.net/2017/08/21/599a521472424.jpg",
        question: "计网作业不想做了怎么办",
        answer: "让组长去做",
        ups: 100
      },{
        name: "混子队长",
        avatar: "https://i.loli.net/2017/08/21/599a521472424.jpg",
        question: "计网作业组员和组长都不想做了怎么办",
        answer: "让田神去做",
        ups: 100
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
