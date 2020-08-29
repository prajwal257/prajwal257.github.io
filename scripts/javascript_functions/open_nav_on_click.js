export var open_nav_on_click = function(){
    let flag=false;
    let navigation = document.getElementsByTagName("nav")[0];
    let navigation_trigger = document.getElementsByClassName("nav_trigger")[0];
    let nav_icon_line_1 = document.getElementsByClassName("line_1")[0];
    let nav_icon_line_2 = document.getElementsByClassName("line_2")[0];
    var toggleNav = function(){
        if(flag==false){
            navigation.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
            //navigation_trigger.style.position = "fixed";
            document.body.style.overflowY = "hidden";
            nav_icon_line_1.classList.add("line_1_active")
            nav_icon_line_2.classList.add("line_2_active")
            flag=true;
        }
        else{
            navigation.style.clipPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
            document.body.style.overflowY = "visible";
            //navigation_trigger.style.position = "relative";
            nav_icon_line_1.classList.remove("line_1_active")
            nav_icon_line_2.classList.remove("line_2_active")
            flag=false;
        }
    }
    let trigger = document.getElementsByClassName("nav_trigger")[0];
    trigger.addEventListener("click",function(){
        toggleNav();
    })
}
