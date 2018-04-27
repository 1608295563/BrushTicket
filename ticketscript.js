javascript:(function(url) {
    var s = document.createElement('script');
    s.src = url;
    (document.getElementsByTagName('head')[0] ||
        document.getElementsByTagName('body')[0]).appendChild(s);
})('http://code.jquery.com/jquery-2.1.3.js');//在html中插入jquery，后面bind()会用到
function brushVotes(){   //刷票函数
var t = setInterval(function(){
  var three_num = $("#person3>p>span").text();  //three票数
  var two_num   = $("#person2>p>span").text();   // two票数
  console.info(two_num+"  "+three_num);
   $("#person2>button").click().attr("disabled",false); //触发投票的事件click,投完后记得把投票权限拿回来
},2000);
}
brushVotes();  // 刷票
$("#person3>p>span").bind('DOMNodeInserted', function(e) { //three改变则 触发
  brushVotes(); //继续刷票
});

