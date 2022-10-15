document.body.onload = function(e){
    var loader = document.getElementById("loader");
    return gsap.to(loader, {
        x: 4000,
        // opacity: 0,
        duration: 1,
        ease: "power4.out"
    });
}

function change_icon(current_theme){
    var parent_element = document.getElementsByClassName("theme_switcher")[0]
    var new_icon = document.createElement('img');
    new_icon.alt = "switch themes"
    if(current_theme=="dark"){
        new_icon.src = "./assets/icons/light_to_dark_theme_switch.svg"
        new_icon.className = "light_to_dark_theme_switch"
        document.getElementsByClassName("dark_to_light_theme_switch")[0].remove();
    }else{
        new_icon.src = "./assets/icons/dark_to_light_theme_switch.svg"
        new_icon.className = "dark_to_light_theme_switch"
        document.getElementsByClassName("light_to_dark_theme_switch")[0].remove();
    }
    parent_element.append(new_icon);
}

document.getElementsByClassName("theme_switcher")[0].addEventListener("click", function(){
    var head = document.getElementsByTagName('head')[0]
    // Creating link element
    var style = document.createElement('link') 
    style.type = 'text/css'
    style.rel = 'stylesheet'
    style.classList.add("CSS_FILE")
    // getting the current theme.
    var current_CSS = document.getElementsByClassName("CSS_FILE")[0]
    var current_theme = current_CSS.getAttribute("theme")
    if(current_theme == "dark"){
        style.href = './Styles/main_light.css';
        style.setAttribute("theme", "light");
        document.body.style.backgroundColor = "#f5f5f5";
    }else{
        style.href = './Styles/main_dark.css'
        style.setAttribute("theme", "dark")
        document.body.style.backgroundColor = "#161616";
    }
    head.append(style);
    change_icon(current_theme);
    setTimeout(()=>{
        document.getElementsByClassName("CSS_FILE")[0].remove();
    }, 100)
})

let elements = document.getElementsByClassName("menu_expanded_link")
let targets = document.getElementsByClassName("link_blobs")
for(let i = 0; i<elements.length; i++){
    elements[i].addEventListener("mouseover", () => {
        targets[i].style.transform = "scale(1)";
    })
    elements[i].addEventListener("mouseout", () => {
        targets[i].style.transform = "scale(0)";
    })
}
document.getElementsByClassName("menu_toggle_switch")[0].addEventListener("click", () => {
    document.getElementsByClassName("menu_page")[0].classList.toggle("closed")
})
document.getElementById("menu_expanded_close").addEventListener("click", () => {
    document.getElementsByClassName("menu_page")[0].classList.toggle("closed")  
})
let cursor = document.getElementsByClassName("cursor")[0];
let cursor_follower = document.getElementsByClassName("cursor_follower")[0];  
document.addEventListener('mousemove',function(e){
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
    cursor_follower.style.top = e.pageY + "px";
    cursor_follower.style.left = e.pageX + "px";
});
