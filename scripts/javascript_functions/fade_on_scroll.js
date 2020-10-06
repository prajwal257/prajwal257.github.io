export var fade_on_scroll = function(){
    var image = document.getElementsByClassName("about_main_image");
    console.log("inside fade on scroll function" + image )
    document.body.addEventListener("scroll",function(){
        console.log("document is being scrolled down by" + pageYOffset);
        if(pageYOffset >  500 ){
            image.style.opacity = 0;
        }
    })
}