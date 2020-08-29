export var pageEnterAnimation = function(){
    var tl = gsap.timeline();
    tl.to(".enter_loader", {
        duration: 2.5,
        height: "0%",
        ease: "Expo.easeInOut",
        //delay: 1,
    });
}