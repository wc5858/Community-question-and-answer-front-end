<template>
  <div class="page">
    <i-cell-group>
      <i-cell
        v-for="(item, itemIndex) in cards"
        v-bind:key="itemIndex"
        v-bind:title="item.name"
        v-bind:label="item.answers+'个回答 · '+item.focus+'人关注'"
        is-link
        url="/pages/dashboard/index"
      ></i-cell>
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
          qid: 0
        },
        {
          name: "计网作业不想做了怎么办？",
          focus: 100,
          answers: 10,
          qid: 0
        },
        {
          name: "计网作业不想做了怎么办？",
          focus: 100,
          answers: 10,
          qid: 0
        }
      ]
    };
  },
  created() {},
  methods: {}
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
