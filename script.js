
window.onscroll = function() {
    scroll();
 };
 
 function scroll() {
    if (
       document.body.scrollTop > 20 ||
       document.documentElement.scrollTop > 20
    ) {
       document.getElementById("hrg").style.top = "-100px";
    } else {
       document.getElementById("hrg").style.top = "0";
    }
 }