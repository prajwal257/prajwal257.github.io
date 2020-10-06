export var cursor_on_links = function(){
    let cursor = document.getElementsByClassName("cursor")[0];
    for(var i=0; i< document.getElementsByClassName("about_page_link").length ;i++){
        console.log(document.getElementsByClassName("about_page_link")[i].getAttribute("data-url"));
        document.getElementsByClassName("about_page_link")[i].addEventListener("mouseover",function(e){
            console.log("scaling the cursor up");
            cursor.classList.add("cursor_on_links");
            document.getElementsByClassName("cursor_follower")[0].style.transition = "all .025s";
        });
        document.getElementsByClassName("about_page_link")[i].addEventListener("mouseout",function(e){
            console.log("scaling the cursor down");
            cursor.classList.remove("cursor_on_links");
            document.getElementsByClassName("cursor_follower")[0].style.transition = "all .1s";
        });
    }
}