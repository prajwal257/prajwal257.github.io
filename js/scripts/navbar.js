export function navbar(){
    function change_icon(current_theme){
        var parent_element = document.getElementsByClassName("theme_switcher")[0]
        var new_icon = document.createElement('img');
        new_icon.alt = "switch themes"
        if(current_theme=="dark"){
            new_icon.src = "../assets/icons/light_to_dark_theme_switch.svg"
            new_icon.className = "light_to_dark_theme_switch"
            document.getElementsByClassName("dark_to_light_theme_switch")[0].remove();
        }else{
            new_icon.src = "../assets/icons/dark_to_light_theme_switch.svg"
            new_icon.className = "dark_to_light_theme_switch"
            document.getElementsByClassName("light_to_dark_theme_switch")[0].remove();
        }
        parent_element.append(new_icon);
    }

    document.getElementsByClassName("theme_switcher")[0].addEventListener("click", function(){
        // change the color theme.
        let current_theme = document.body.getAttribute("current_theme")
        if(current_theme == "light"){
            document.body.classList.add("dark_theme")
            document.body.classList.remove("light_theme")
            document.body.setAttribute("current_theme", "dark")
        }else{
            document.body.classList.add("light_theme")
            document.body.classList.remove("dark_theme")
            document.body.setAttribute("current_theme", "light")
        }
        change_icon(current_theme)
    })

    var locked = false
    document.getElementsByClassName("menu_toggle_switch")[0].addEventListener("click", () => {
        if(!locked){
            locked = true;
            setTimeout( locked = false, 1000)
            document.getElementsByClassName("menu_page")[0].classList.toggle("closed")
            document.getElementsByClassName("menu_page")[0].classList.toggle("open")
        }
    })
    document.getElementById("menu_expanded_close").addEventListener("click", () => {
        if(!locked){
            console.log("trying to open the menu")
            locked = true;
            setTimeout( locked = false, 1000)
            document.getElementsByClassName("menu_page")[0].classList.toggle("closed")
            document.getElementsByClassName("menu_page")[0].classList.toggle("open")
        }
    })
}