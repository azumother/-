
$(function(){
    $('#kizituu').click(function() {
    var now=new Date();
    var dasutosi=parseInt(prompt("何年後に提出予定？(今年なら0と入力)"));
    var dasumonth=parseInt(prompt("何月に提出予定?"));
    var dasuday=parseInt(prompt("何日に提出予定?"));
    let tositosi=parseInt(prompt("生まれた年は?"));
    let tsuki=parseInt(prompt("生まれた月は?"));
    var dayday=parseInt(prompt("生まれた日は?"));

        $('#kizis').html(dasutosi+now.getFullYear()+"年"+dasumonth+"月"+dasuday+"日"); 
        $("#nen").html("生年月日:"+tositosi+"年");
        $("#tuki").html(tsuki+"月");
       $("#niti").html(dayday+"日生");
        if (dasumonth - tsuki < 0||(dasumonth==tsuki&&dasuday-dayday>0)) {
             $("#age").html("満"+(dasutosi+now.getFullYear() -tositosi-1)+"歳)");
          }
          else if(dasumonth - tsuki >0||(dasumonth==tsuki&&dasuday-dayday<=0)){
            $("#age").html("満"+(dasutosi+now.getFullYear() -tositosi)+"歳)");
          }
    });
    
    $("#myoyomi").click(function() {
        var myoyomi=prompt("あなたの上の名前のふりがな");
       $("#ueyomi").html("ふりがな:"+"　　"+myoyomi+"　　");
});

$('#nayomi').click(function() {
    var nayo=prompt("下の名前のふりがな(ミドルネームも含む)");
    $('#sitayomi').html(nayo);
});

$("#myozi").click(function() {
    var myouzi=prompt("名字の漢字");
    $('#myouzi').html("氏名:"+"　　"+myouzi+"　");
});

$('#na').click(function() {
    var na=prompt("下の名前の漢字(ミドルネームも含む)");
    $('#name').html(na);
});

$('#seibetu').click(function() {
    var seibetu=prompt("男性ならM、女性ならF、と入力してください。");
if(seibetu=="m"||seibetu=="M"){
    $('#jender').html("㊚・女");
 }
 else if(seibetu=="f"||seibetu=="F"){
    $('#jender').html("男・ ㊛ ");
 }
});

$('#yubin').click(function() {
    var yuubin=prompt("郵便番号を入力して");
    $('#yuubin').html("現住所:"+"　　　"+"〒"+yuubin);
});


$('#zyuushohuri').click(function() {
    var zyuusho=prompt("住所のふりがな（数字はいいよ）");
    $('#addhira').html("ふりがな:"+"　　　　"+zyuusho);
});

$('#zyuusho').click(function() {
    var zyuusho2=prompt("住所を入れて");
    $('#newaddress').html("　　　　　　　"+zyuusho2);
});

$('#other').click(function() {
   var other=prompt("もしあるのなら、他の郵便番号を入力して");
    $('#yuubin2').html("現住所:"+"　　　"+"〒"+other);
});

$('#other2').click(function() {
    var other2=prompt("もしあるのなら、他の住所を入れて");
    $('#newaddress2').html("　　　　　　　"+other2);
});

$('#other3').click(function() {
    var other3=prompt("もしあるのなら、他の住所のふりがな（数字はいいよ）");
    $('#addhira2').html("ふりがな:"+"　　　　"+other3);
});

$('#tel').click(function() {
    var tel=prompt("電話番号を入力");
    $('#call').html("TEL:"+"<br>"+"　　　　　　"+tel);
});

$('#mee').click(function() {
    var mee=prompt("メールを入力");
    $("#mail").html("メールアドレス"+"<br>"+"　　　"+mee);
});
});
