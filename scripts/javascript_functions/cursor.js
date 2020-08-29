export var custom_cursor = function(){
    let cursor = document.getElementsByClassName("cursor")[0];
    let cursor_follower = document.getElementsByClassName("cursor_follower")[0];
    let cursor_project = document.getElementsByClassName("cursor_on_projects")[0];    
    document.addEventListener('mousemove',function(e){
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";
        cursor_follower.style.top = e.pageY + "px";
        cursor_follower.style.left = e.pageX + "px";
        cursor_project.style.top = e.pageY + "px";
        cursor_project.style.left = e.pageX + "px";
    });
    var view_on_hover = document.getElementsByClassName("hero_image")[0];
    view_on_hover.addEventListener("mouseenter", function(){
        //view_on_hover.style.transform = "scale(1.1)"
        cursor.classList.add("cursor_active");
        //cursor_follower.style.borderColor = "#000000";
        cursor_follower.style.transform = "scale(0) rotate(-45deg)";
        document.body.style.backgroundColor = "#cecece";
    });
    view_on_hover.addEventListener("mouseleave", function(){
        //view_on_hover.style.transform = "scale(1)"
        cursor.classList.remove("cursor_active");
        cursor_follower.style.transform = "scale(1)";
        cursor_follower.style.transform = "rotate(-45deg)";
        document.body.style.backgroundColor = "#f5f5f5";
    });
    /*
    */
}