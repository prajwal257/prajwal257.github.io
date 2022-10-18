function change_color_orange(color){
    let orange = document.getElementsByClassName("saffron");
    for(let i; i<orange.length; i++)
        orange[i].style.backgroundColor = color
}
function change_color_green(color){
    let green = document.getElementsByClassName("green");
    for(let i; i<green.length; i++)
        green[i].style.backgroundColor = color
}

export function india_hover_effect () {
    let body_background = document.getElementsByClassName("background")[0];
    let green = document.getElementsByClassName("green");
    document.getElementsByClassName("india")[0].addEventListener("mouseover", function(){
        change_color_orange("orange")
        document.body.style.backgroundColor = "#c6c6c6"
        change_color_green("green")
    })
    document.getElementsByClassName("india")[0].addEventListener("mouseout", function(){
        body_background.style.backgroundColor = "transparent"
    })
}