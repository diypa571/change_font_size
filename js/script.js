/*
Changing the size of text using using javascript...
Two simple javascript functions... 
*/
var font = 12; //
function textSizePlus(){
++font;
document.getElementById('demo').style.fontSize=font+"px";
}

function textSizeMinus(){
--font;
document.getElementById('demo').style.fontSize=font+"px";
}