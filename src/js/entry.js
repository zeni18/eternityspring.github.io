require("!style!css!sass!./../scss/style.scss");

var Vue = require('vue');

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  created:function () {
    console.log(1);
    /*$.ajax({
      type:'get',
      url:'/assets/resume.json',
      success:function (data) {
        console.log(data);
      }
    })*/
  },
  ready:function () {
  }
});
var $ = require('zepto');
$.ajax({
  type:'get',
  url:'/assets/resume.json',
  success:function (data) {
    console.log(data);
  }
})
