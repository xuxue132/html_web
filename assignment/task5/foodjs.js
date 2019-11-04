function div_show(){
    document.getElementById("picture_hover").style.display=""
}

function div_hiden() {
    document.getElementById("picture_hover").style.display="none"
}
document.getElementById("one").style.backgroundColor="#ffffffff";
document.getElementById("one").style.color="#65360a";
function f(i) {
    var h=['one','two','three','four','five','six'];
    var display=['oneclass','twoclass','threeclass','fourclass','fiveclass','sixclass'];
    var x;
    for(x in h){
        if(h[x]===i){
            document.getElementById(display[x]).style.display="";
            document.getElementById(i).style.backgroundColor="#ffffffff";
            document.getElementById(i).style.color="#65360a";
        }else {
            document.getElementById(display[x]).style.display="none";
            document.getElementById(h[x]).style.backgroundColor="#65360a";
            document.getElementById(h[x]).style.color="#ffffffff";
        }

    }
}

function pictureshow() {
   document.getElementById("pis").style.display="";
}

function close_pic(){
    var change=document.getElementById("picture");
    document.getElementById("pis").style.display="none"
    change.src="imges/one.png";
}

window.onload=function (){
    var h =["one.png","4.png","5.png","6.png","7.png"];
    var change=document.getElementById("picture");
    var up=document.getElementById("pic_last");
    var down=document.getElementById("pic_next");
    var index=0;


    up.addEventListener("click",function () {
        if(index<=0){
            index=h.length;
        }
        change.src="imges/"+h[--index];
    },false)
    down.addEventListener("click",function () {
        if(index>=h.length-1){
            index=-1;
        }
        change.src="imges/"+h[++index];

    },false)


}
var index=0;
var picture =["2.png","4.png","5.png","6.png","7.png","8.png","9.png"];
var change1=document.getElementById("time_show_one");
function time_show_one(){

    var change1=document.getElementById("time_show_one");
    change1.src= "imges/" + picture[index++];
    if (index >= picture.length) {
        index=0;
    }
    setTimeout(time_show_one,3000);


}

function change2() {
    var up=document.getElementById("change_body_picture1");
    var down=document.getElementById("change_body_picture2");
    up.addEventListener("click",function () {
        if(index<=0){
            index=picture.length;
        }
        change1.src="imges/"+picture[--index];

    },false)
    down.addEventListener("click",function () {
        if(index>=picture.length-1){
            index=-1;
        }
        change1.src="imges/"+picture[++index];

    },false)
}
time_show_one();
change2();
