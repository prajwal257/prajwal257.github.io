export var cursor_on_links = function(){
    let cursor = document.getElementsByClassName("cursor")[0];
    let cursor_follower = document.getElementsByClassName("cursor_follower")[0];
    let cursor_title = document.getElementsByClassName("cursor_on_title")[0];
    for(var i=0; i< document.getElementsByClassName("about_page_link").length ;i++){
        console.log(document.getElementsByClassName("about_page_link")[i].getAttribute("data-url"));
        document.getElementsByClassName("about_page_link")[i].addEventListener("mouseover",function(e){
            console.log("scaling the cursor up");
            cursor.classList.add("cursor_on_links");
            cursor_follower.style.transform = "scale(1.8)";
            cursor_follower.style.transition = "all .025s";
            document.body.style.backgroundColor = "#cecece";
        });
        document.getElementsByClassName("about_page_link")[i].addEventListener("mouseout",function(e){
            console.log("scaling the cursor down");
            cursor.classList.remove("cursor_on_links");
            cursor_follower.style.transform = "scale(1)";
            cursor_follower.style.transition = "all .1s";
            document.body.style.backgroundColor = "#f5f5f5";
        });
    }
    for(var i=0; i< document.getElementsByClassName("title_hover").length ;i++){
        document.getElementsByClassName("title_hover")[i].addEventListener("mouseover",function(e){
            cursor_title.style.transform = "scale(1)";
            cursor_follower.style.transform = "scale(.5)";
            cursor_follower.style.transition = "all .025s";
        });
        document.getElementsByClassName("title_hover")[i].addEventListener("mouseout",function(e){
            cursor_title.style.transform = "scale(0)";
            cursor_follower.style.transform = "scale(1)";
            cursor_follower.style.transition = "all .1s";
        });
    }
}