export var cursor_on_projects = function(){
    let cursor = document.getElementsByClassName("cursor")[0];
    let cursor_follower = document.getElementsByClassName("cursor_follower")[0];
    let cursor_project = document.getElementsByClassName("cursor_on_projects")[0]; 

    var view_on_hover_project = document.getElementsByClassName("project-1")[0];
    view_on_hover_project.addEventListener("mouseenter", function(){
        cursor_project.style.backgroundImage = "url('/assets/images/project-1.png')";
        cursor_project.style.transform = "scaleY(1)";
        document.body.style.backgroundColor = "#cecece";
    });
    view_on_hover_project.addEventListener("mouseleave", function(){
        cursor_project.style.transform = "scaleY(0)";
        document.body.style.backgroundColor = "#f5f5f5";
    });

    var view_on_hover_project = document.getElementsByClassName("project-2")[0];
    view_on_hover_project.addEventListener("mouseenter", function(){
        cursor_project.style.backgroundImage = "url('/assets/images/project-2.png')";
        cursor_project.style.transform = "scaleY(1)";
        document.body.style.backgroundColor = "#cecece";
    });
    view_on_hover_project.addEventListener("mouseleave", function(){
        cursor_project.style.transform = "scaleY(0)";
        document.body.style.backgroundColor = "#f5f5f5";
    });

    var view_on_hover_project = document.getElementsByClassName("project-3")[0];
    view_on_hover_project.addEventListener("mouseenter", function(){
        cursor_project.style.backgroundImage = "url('/assets/images/project-3.png')";
        cursor_project.style.transform = "scaleY(1)";
        document.body.style.backgroundColor = "#cecece";
    });
    view_on_hover_project.addEventListener("mouseleave", function(){
        cursor_project.style.transform = "scaleY(0)";
        document.body.style.backgroundColor = "#f5f5f5";
    });

    var view_on_hover_project = document.getElementsByClassName("work_with_me_container")[0];
    view_on_hover_project.addEventListener("mouseenter", function(){
        document.body.style.backgroundColor = "#cecece";
    });
    view_on_hover_project.addEventListener("mouseleave", function(){
        document.body.style.backgroundColor = "#f5f5f5";
    });

}