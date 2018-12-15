<template>
  <div class="page">
    <div>
      <view class="avatar-bg-box">
        <image class="avatar-bg" mode="aspectFill" src="/static/imgs/bg.jpg" />
        <view class="user-name">{{name}}</view>
      </view>
      <image class="avatar" mode="aspectFill" v-bind:src="avatar" />
    </div>
    <div class="mine-content">
      <div v-if="show">
        <i-button open-type="getUserInfo" @getuserinfo="onGotUserInfo" type="info">点击登陆</i-button>
      </div>
      <div class="mine-info" v-else>
        <i-panel>
          <i-cell-group>
            <i-cell title="我关注的用户" is-link url="/pages/fou/main"></i-cell>
            <i-cell title="我关注的问题" is-link url="/pages/foq/main"></i-cell>
          </i-cell-group>
        </i-panel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      name: "未登录",
      show: false,
      avatar: "/static/imgs/avatar.jpg"
    };
  },
  methods: {
    getUserInfo() {
      wx.getUserInfo({
        success: res => {
          this.name = res.userInfo.nickName;
          this.avatar = res.userInfo.avatarUrl;
        },
        fail: () => {
          this.show = true;
        }
      });
    },
    onGotUserInfo(e) {
      this.name = e.target.userInfo.nickName;
      this.avatar = e.target.userInfo.avatarUrl;
    }
  },
  created() {
    this.getUserInfo();
  }
};
</script>

<style>
.page {
  background: #f3f3f3;
  min-height: 100vh;
}
.avatar-bg-box {
  position: relative;
  height: 450rpx;
}
.avatar-bg {
  height: 100%;
}
.avatar {
  position: absolute;
  height: 208rpx;
  width: 208rpx;
  border: 8rpx solid #fff;
  top: 300rpx;
  right: 40rpx;
}
.mine-content {
  margin-top: 100rpx;
}
.user-name {
  position: absolute;
  bottom: 16rpx;
  right: 280rpx;
  color: white;
}
</style>
