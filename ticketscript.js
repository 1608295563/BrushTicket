javascript:(function(url) {
    var s = document.createElement('script');
    s.src = url;
    (document.getElementsByTagName('head')[0] ||
        document.getElementsByTagName('body')[0]).appendChild(s);
})('http://code.jquery.com/jquery-2.1.3.js');//��html�в���jquery������bind()���õ�
function brushVotes(){   //ˢƱ����
var t = setInterval(function(){
  var three_num = $("#person3>p>span").text();  //threeƱ��
  var two_num   = $("#person2>p>span").text();   // twoƱ��
  console.info(two_num+"  "+three_num);
   $("#person2>button").click().attr("disabled",false); //����ͶƱ���¼�click,Ͷ���ǵð�ͶƱȨ���û���
},2000);
}
brushVotes();  // ˢƱ
$("#person3>p>span").bind('DOMNodeInserted', function(e) { //three�ı��� ����
  brushVotes(); //����ˢƱ
});

