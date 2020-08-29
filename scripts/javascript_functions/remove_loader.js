export var remove_loader = function(){
    setTimeout(function(){
        setTimeout(function(){
            let loader = document.getElementsByClassName("loading_circle")[0];
            loader.style.opacity = "0";
        },2000)
        let loader = document.getElementsByClassName("loader")[0];
        loader.style.transform = "translateY(-100%)";
        window.scrollTo(0, 0);
    },2000);
}