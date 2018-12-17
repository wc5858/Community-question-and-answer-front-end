function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

const callTarget = 'https://wc47501.3msl.cn/qna'
// const callTarget = 'http://192.168.1.106:443'

function callApi (method='GET',url,data) {
  wx.showLoading({
    title: '加载中',//数据请求前loading，提高用户体验
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: callTarget + '/' + url,
      data: data,
      method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        // 'X-Bmob-Application-Id': bmobConfig.applicationId,
        // 'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
        'Content-Type': 'application/json'
      }, // 设置请求的 header
      success: function (res) {
        wx.hideLoading();
        if(res.statusCode!=200){
          wx.showToast({
            title: "网络出错，稍后再试",
            icon: "none"
          });
          return false;
        }
        resolve(res.data);
      },
      fail: function (error) {
        wx.hideLoading();
        reject(error);
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  })
}


export default {
  formatNumber,
  formatTime,
  callApi
}
