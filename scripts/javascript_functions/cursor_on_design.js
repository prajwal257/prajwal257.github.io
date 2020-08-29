export var cursor_on_design = function(){
    let cursor = document.getElementsByClassName("cursor")[0];
    let cursor_follower = document.getElementsByClassName("cursor_follower")[0];
    let cursor_project = document.getElementsByClassName("cursor_on_projects")[0]; 

    var view_on_hover_project = document.getElementsByClassName("design-1")[0];
    view_on_hover_project.addEventListener("mouseenter", function(){
        cursor_project.style.backgroundImage = "url('/assets/images/design-1.png')";
        cursor_project.style.transform = "scaleY(1)";
        document.body.style.backgroundColor = "#D2D2D2";
    });
    view_on_hover_project.addEventListener("mouseleave", function(){
        cursor_project.style.transform = "scaleY(0)";
        document.body.style.backgroundColor = "#f5f5f5";
    });

    var view_on_hover_project = document.getElementsByClassName("design-2")[0];
    view_on_hover_project.addEventListener("mouseenter", function(){
        cursor_project.style.backgroundImage = "url('/assets/images/design-2.png')";
        cursor_project.style.transform = "scaleY(1)";
        document.body.style.backgroundColor = "#D2D2D2";
    });
    view_on_hover_project.addEventListener("mouseleave", function(){
        cursor_project.style.transform = "scaleY(0)";
        document.body.style.backgroundColor = "#f5f5f5";
    });

    var view_on_hover_project = document.getElementsByClassName("design-3")[0];
    view_on_hover_project.addEventListener("mouseenter", function(){
        cursor_project.style.backgroundImage = "url('/assets/images/design-3.png')";
        cursor_project.style.transform = "scaleY(1)";
        document.body.style.backgroundColor = "#D2D2D2";
    });
    view_on_hover_project.addEventListener("mouseleave", function(){
        cursor_project.style.transform = "scaleY(0)";
        document.body.style.backgroundColor = "#f5f5f5";
    });

}