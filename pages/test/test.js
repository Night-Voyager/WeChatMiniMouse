// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accelerometerX: 0,
    accelerometerY: 0,
    accelerometerZ: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 启动加速计
    wx.startAccelerometer();

    // 启动罗盘
    wx.startCompass({
      success: (res) => {
        console.log("Compass start")
      },
    });

    // 启动设备方向监听
    wx.startDeviceMotionListening();

    // 启动陀螺仪
    wx.startGyroscope();

    /**
     * 读取数据
     */
    // 加速计
    wx.onAccelerometerChange((result) => {
      let accelerometerDeltaX = result.x - this.data.accelerometerX;
      let accelerometerDeltaY = result.y - this.data.accelerometerY;
      let accelerometerDeltaZ = result.z - this.data.accelerometerZ;
      this.setData({
        accelerometerX: result.x,
        accelerometerY: result.y,
        accelerometerZ: result.z
      });
      console.log("{" + accelerometerDeltaX.toFixed(3) + ", " + accelerometerDeltaY.toFixed(3) + ", " + accelerometerDeltaZ.toFixed(3) + "}");
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // 关闭加速计
    wx.stopAccelerometer();

    // 关闭罗盘
    wx.stopCompass({
      success: (res) => {
        console.log("Compass start")
      },
    });

    // 关闭设备方向监听
    wx.stopDeviceMotionListening();

    // 关闭陀螺仪
    wx.stopGyroscope();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // 关闭加速计
    wx.stopAccelerometer();

    // 关闭罗盘
    wx.stopCompass({
      success: (res) => {
        console.log("Compass start")
      },
    });

    // 关闭设备方向监听
    wx.stopDeviceMotionListening();

    // 关闭陀螺仪
    wx.stopGyroscope();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})