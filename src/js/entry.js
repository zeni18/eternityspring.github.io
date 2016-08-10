require("!style!css!sass!./../scss/style.scss");

var vm = new Vue({
  el: '#app',
  data: {
    userInfo:null,
    message: 'Hello Vue.js!'
  },
  created:function () {
    console.log(1);
    $.ajax({
      type:'get',
      url:'assets/resume.json',
      success:function (data) {
        console.log(data);
        vm.userInfo = data;
      }
    })
  },
  ready:function () {
  }
});
