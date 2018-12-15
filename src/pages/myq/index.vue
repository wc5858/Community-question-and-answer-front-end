<template>
  <div class="page">
    <i-cell-group>
      <i-cell
        v-for="(item, itemIndex) in cards"
        v-bind:key="itemIndex"
        v-bind:title="item.name"
        v-bind:label="item.answers+'个回答 · '+item.focus+'人关注'"
        url="/pages/dashboard/index"
      >
      <div slot="footer">
        <i-switch v-bind:value="item.on" size="large" @change="onChange(itemIndex)">
            <view slot="open">开启</view>
            <view slot="close">关闭</view>
        </i-switch>
      </div>
      </i-cell>
    </i-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          name: "计网作业不想做了怎么办？",
          focus: 100,
          answers: 10,
          qid: 0,
          on:true
        },
        {
          name: "计网作业不想做了怎么办？",
          focus: 100,
          answers: 10,
          qid: 0,
          on:true
        },
        {
          name: "计网作业不想做了怎么办？",
          focus: 100,
          answers: 10,
          qid: 0,
          on:true
        }
      ]
    };
  },
  created() {},
  methods: {
    onChange(idx){
      this.cards[idx].on = !this.cards[idx].on
    }
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
