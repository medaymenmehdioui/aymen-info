var prevSceollpos = window.pageYOffset;
window.onscroll = function(){
    
    var currentScrollpos = window.pageYOffset;
    if(prevSceollpos > currentScrollpos){
        document.getElementById("nav-bar").style.top="0";
    }else{
        document.getElementById("nav-bar").style.top="-100px";
    }
    prevSceollpos = currentScrollpos;
}