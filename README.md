# BrushTicket
ticket.html and ticket.js are 页面代码
ticketscript.js 是刷票脚本
火狐打开页面->F12->控制台->在最下面输入下面代码
javascript:(
function(url) {
  var s = document.createElement('script'); 
  s.src = url; 
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s); 
})('file:///D:/ticketscript.js');
将js代码注入html页面中，打开本地js脚本

参考：https://www.cnblogs.com/imwtr/p/4394281.html
