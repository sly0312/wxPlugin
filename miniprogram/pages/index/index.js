var plugin = requirePlugin("myPlugin")

Page({
  data:{
     showBool:false
  },
  onLoad: function() {
    plugin.getData()
  },
  goPlugin:function(){
    wx.navigateTo({
      url: 'plugin-private://wxc0c133f8e008f8af/pages/hello-page/hello-page',
    })
  },
  onMyEvent:function(e){
    console.log("我是页面上的事件",e);
  }
})