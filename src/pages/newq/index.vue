<template>
  <div class="page">
    <i-panel title="问题">
      <i-input v-bind:value="qname" placeholder="请输入问题" @change="nameChange"/>
    </i-panel>
    <i-panel title="问题描述">
      <i-input v-bind:value="qnamedsc" placeholder="请输入问题" />
    </i-panel>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      qname: "",
      qnamedsc: "",
    };
  },
  methods: {
    nameChange(e){
      console.log(e)
    }
  },
  created() {
  }
};
</script>

<style>
.page {
  background: #f3f3f3;
  min-height: 100vh;
}

</style>
