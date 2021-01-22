export var pageEnterAnimation = function(){
    var tl = gsap.timeline();
    tl.to(".enter_loader", {
        duration: 2.5,
        height: "0%",
        ease: "Expo.easeInOut",
        //delay: 1,
    })
    tl.from(".text_container h1", 1 , {
        y: 100,
        ease: Power4.out,
        delay: -1,
        skewY: 5,
        opacity: 0,
        stagger:{
            amount: 0.5
        }
    })
    tl.from(".hero_image .cover-image", 1 , {
        //clipPath: 'polygon(100% 0, 0 0, 0 0, 100% 0)',
        opacity: 0,
        ease: Power4.out,
        //delay: .25
    })
    tl.from(".text_container .cta", .5 , {
        opacity: 0,
        ease: Power4.out,
        //delay: -1
    })
    tl.from(".text_container p", .2 , {
        y: 50,
        skewY: 5,
        opacity: 0,
        ease: Power4.out
        //delay: .25
    })
    tl.to(".hero_image .scroll_indicator", .2 , {
        opacity: 1,
        ease: Power4.out,
    })
    tl.from(".container header nav ul li", .2 , {
        opacity: 0,
        x: -10,
        ease: Power4.out,
        stagger:{
            amount: 0.5
        }
    })
}