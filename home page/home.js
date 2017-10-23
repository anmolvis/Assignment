function searchPop() {
  var a=0
    var b=setInterval(function () {
    a=a+1;
    document.getElementById('search').style.marginTop=a+"px";
    var c=150+a;
    document.getElementById('container').style.paddingTop=c+"px";
    if (a==68)
    clearInterval(b);
  }, 5);
}
function searchHide()
{
  var a=68;
  var b=setInterval(function () {
    a=a-1;
    document.getElementById('search').style.marginTop=a+"px";
    var c=150+a;
    document.getElementById('container').style.paddingTop=c+"px";
    if (a==0)
    clearInterval(b);
  }, 5);
}
function onvalid() {
  var a= document.getElementById('searchbox').value;
  if(isNaN(a)|| a=="")
  {
    alert("Only Enter the Number ID");
    return false;
  }
  else{
    return true;
  }
}
function radiobut(a) {
  alert (a);

}
