require("!style!css!sass!./../scss/style.scss");

var vm = new Vue({
  el: '#app',
  data: {
    loading:false,
    userInfo:null,
    message: 'Hello Vue.js!'
  },
  created:function () {
    new WOW().init();
    $.ajax({
      type:'get',
      url:'assets/resume.json',
      success:function (data) {
        console.log(data);
        vm.userInfo = data;
        vm.loading = true;
      }
    })
  },
  compiled:function () {
  }
});
