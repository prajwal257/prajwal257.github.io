export function projects() {
    const projects = document.getElementsByClassName("project")
    const cursor_on_projects = document.getElementsByClassName("cursor_on_projects")[0];
    const body_background = document.getElementsByClassName("background")[0];
    for(let i = 0; i<projects.length; i++){
      projects[i].addEventListener("mouseover", function() {
        cursor_on_projects.style.transform = "Scale(1)";
        cursor_on_projects.style.backgroundImage = `url(../assets/thumbnails/DS_IMG_${i+1}.jpg)`;
        function random(min, max, current_theme) {
          var number = Math.floor(Math.random() * (max - min)) + min;
          if(current_theme == 'dark' && number<100){
            number*=0.125;
            console.log("current number is: ", number)
          }
          else if(current_theme == 'light' && number>150)
            number*=1.5;
          return number
        }
        let current_theme = document.body.getAttribute("current_theme")
        let r = random(0, 255, current_theme)
        let g = random(0, 255, current_theme)
        let b = random(0, 255, current_theme)
        if(current_theme == 'dark'){
          (r>125)?r*=0.75:r=r;
          (g>125)?g*=0.75:g=g;
          (b>125)?b*=0.75:b=b;
        }else{
          (r<125)?r*=1.75:r=r;
          (g<125)?g*=1.75:g=g;
          (b<125)?b*=1.75:b=b;
        }
        let new_background_color = `rgb(${r}, ${g}, ${b})`;
        body_background.style.backgroundColor = new_background_color;
      })
      projects[i].addEventListener("mouseout", function() {
        cursor_on_projects.style.transform = "Scale(0)";
        body_background.style.backgroundColor = "transparent"
      })
    }
}

