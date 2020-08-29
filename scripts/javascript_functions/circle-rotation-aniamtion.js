export var circleRotationAniamtion = function(){
    var circle = document.getElementsByClassName("scroll_indicator")[0];
    document.body.addEventListener("onscroll", function(){
        circle.style.transfrom = "rotate(" + window.pageYOffset + "deg)";
        console.log( "rotateY(" + window.pageYOffset + "deg)" );
    })
}