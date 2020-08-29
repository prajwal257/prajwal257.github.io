export var pageLeavingAnimationFunction = function(){
    for(var i=0; i< document.getElementsByClassName("about_page_link").length ;i++){
        //console.log(document.getElementsByClassName("about_page_link")[i].getAttribute("data-url"));
        document.getElementsByClassName("about_page_link")[i].addEventListener("click",function(e){
            var tl = gsap.timeline();
            tl.to(".leave_loader", {
                duration: .1,
                height: "100%",
                //ease: "Expo.easeInOut"
            });
            let target = this.getAttribute("data-url");
            console.log(target);
            setTimeout(
                function(){
                    window.location.href = target;
                },
                700
            );
        });
    }
    
    //...................animation...................
    /*
    function pageLeavingAnimation(){
        var tl = gsap.timeline();
        tl.to(".leave_loader", {
            duration: 1.2,
            height: "100%",
            ease: "Expo.easeInOut",
        });
    }
    //...................functions...................

    */
}