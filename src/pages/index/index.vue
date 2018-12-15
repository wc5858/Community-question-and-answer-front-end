<template>
  <div class="page">
    <ul>
      <li class="list" v-for="(item, itemIndex) in cards" v-bind:key="itemIndex">
        {{item.value}}
        <i-card
          full="true"
          v-bind:title="item.name"
          v-bind:thumb="item.avatar"
        >
          <view slot="content">{{item.ups + '赞回答：' +item.question}}</view>
          <view slot="footer">{{item.answer}}</view>
        </i-card>
      </li>
    </ul>
    <div class="add" @click="newQuestion">
      <i-icon type="add" size="45" color="#fff" />
    </div>
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

  methods: {
    newQuestion() {
      wx.navigateTo({
        url: '/pages/newq/main'
      })
    },
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    login() {
      wx.getStorage({
        key: "openid",
        success:res=> {
          console.log(res.data);
        },
        fail:()=> {
          // 调用登录接口
          wx.login({
            success: res => {
              if (res.code) {
                this
                  .$callApi("POST", "user/login", {
                    code: res.code
                  })
                  .then(res => {
                    wx.setStorage({
                      key: 'openid',
                      data: res.openid
                    })
                  })
                  .catch(res => {
                    console.log(res);
                  });
              } else {
                console.log("登录失败！" + res.errMsg);
              }
            }
          });
        }
      });
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    }
  },

  created() {
    this.login();
  },
};
</script>

<style scoped>
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
.add {
  position: fixed;
  bottom: 40rpx;
  right: 40rpx;
  height: 140rpx;
  width: 140rpx;
  border-radius: 100%;
  box-shadow: 0 10rpx 30rpx 6rpx #999;
  background: #73116f;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
