var now=new Date();
let kizitu=document.getElementById('kizis');
var dasutosi=parseInt(prompt("何年後に提出予定？(今年なら0と入力)"))
var dasumonth=parseInt(prompt("何月に提出予定?"));
var dasuday=parseInt(prompt("何日に提出予定?"))
kizitu.innerHTML=(dasutosi+now.getFullYear())+"年"+dasumonth+"月"+dasuday+"日";

let myouzi=document.getElementById("myouzi");
myouzi.innerHTML="氏名:"+"　　"+prompt("名字の漢字")+"　";

let namae=document.getElementById("name");
    namae.innerHTML=prompt("下の名前の漢字(ミドルネームも含む)");

let myouziyomi=document.getElementById("ueyomi");
myouziyomi.innerHTML="ふりがな:"+"　　"+prompt("あなたの上の名前のふりがな")+"　　";

let sita=document.getElementById("sitayomi");
sita.innerHTML=prompt("下の名前のふりがな(ミドルネームも含む)");


let year=document.getElementById("nen");
let tositosi=parseInt(prompt("生まれた年は?"))
year.innerHTML="生年月日:"+tositosi+"年";

let tukituki=document.getElementById("tuki");
let tsuki=parseInt(prompt("生まれた月は?"));
tukituki.innerHTML=tsuki+"月";

let nitiniti=document.getElementById("niti");
var dayday=parseInt(prompt("生まれた日は?"));
nitiniti.innerHTML=dayday+"日生";


if (dasumonth - tsuki < 0||(dasumonth==tsuki&&dasuday-dayday>0)) {
  var  age=document.getElementById("age");
   age.innerHTML="(満"+(dasutosi+now.getFullYear() -tositosi-1)+"歳)";
}
else if(dasumonth - tsuki >0||(dasumonth==tsuki&&dasuday-dayday<=0)){
  var age=document.getElementById("age");
   age.innerHTML="(満"+(dasutosi+now.getFullYear() -tositosi)+"歳)";
}

var seibetu=prompt("男性ならM、女性ならF、と入力してください。");
if(seibetu=="m"||seibetu=="M"){
   seibetu=document.getElementById("jender");
   seibetu.innerHTML="㊚・女";
}
else if(seibetu=="f"||seibetu=="F"){
   seibetu=document.getElementById("jender");
   seibetu.innerHTML="男・ ㊛ ";
}

var yuubin=document.getElementById("yuubin");
   yuubin.innerHTML="現住所:"+"　　　"+"〒"+prompt("郵便番号を入力して");
   var address=document.getElementById("newaddress");
   address.innerHTML="　　　　　　　"+prompt("住所を入れて");
var hurihuri=document.getElementById("addhira");
   hurihuri.innerHTML="ふりがな:"+"　　　　"+prompt("住所のふりがな（数字はいいよ）");

   var yuubin22=document.getElementById("yuubin2");
  var yuubin23=prompt("もしあるのなら、他の郵便番号を入力して");
   yuubin22.innerHTML="連絡先:"+"　　　"+"〒"+yuubin23;
   var address2=document.getElementById("newaddress2");
   var addresshen=prompt("もしあるのなら、他の住所を入れて");
   address2.innerHTML="　　　　　　　"+addresshen;
if(addresshen==""&&yuubin23==""){
   address2.innerHTML="　　　　　　　"+"同上";
}
var hurihuri2=document.getElementById("addhira2");
   hurihuri2.innerHTML="ふりがな:"+"　　　　"+prompt("もしあるのなら、他の住所のふりがな（数字はいいよ）");

   var calls=document.getElementById("call");
   calls.innerHTML="TEL:"+"<br>"+"　　　　　　"+prompt("電話番号を入力");
   var mails=document.getElementById("mail");
  mails.innerHTML="メールアドレス"+"<br>"+"　　　"+prompt("メールを入力");
