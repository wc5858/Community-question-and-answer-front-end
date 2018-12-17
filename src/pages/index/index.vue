<template>
  <div class="page">
    <ul>
      <li class="list" v-for="(item, itemIndex) in cards" v-bind:key="itemIndex" @click="goAnswer(itemIndex)">
        {{item.value}}
        <i-card
          full="true"
          v-bind:title="item.user.name"
          v-bind:thumb="item.user.pictureurl"
        >
          <view slot="content">{{'回答了：' +item.question.title}}</view>
          <view slot="footer">{{item.content}}</view>
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
      cards: []
    };
  },

  methods: {
    goAnswer(i){
      wx.navigateTo({
        url: '/pages/ans/main?aid=' + this.cards[i].aid
      })
    },
    newQuestion() {
      wx.navigateTo({
        url: '/pages/newq/main'
      })
    },
    login() {
      wx.getStorage({
        key: "info",
        success:res=> {
          console.log(res.data)
          this.$callApi("GET",'answer/' + res.data.uid +'/getFollowUserAnswer').then(res=>{
            this.cards=res
          })
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
                    this.$callApi("GET",'answer/' + res.uid +'/getFollowUserAnswer').then(res=>{
                        this.cards=res
                      })
                    wx.setStorage({
                      key: 'info',
                      data: {
                        openid: res.openid,
                        uid: res.uid
                      }
                    })
                  })
                  .catch(res => {
                    console.log(res);
                  });
              } else {
                console.log("登录失败！" + res.errMsg)
              }
            }
          });
        }
      });
    }
  },
  onLoad() {
    let uid = wx.getStorageSync('info').uid
    if(uid) {
      this.$callApi("GET",'answer/' + uid +'/getFollowUserAnswer').then(res=>{
        this.cards=res
      })
    }
  },
  created() {
    this.login();
  }
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
