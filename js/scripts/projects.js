export function projects() {
    const projects = document.getElementsByClassName("project")
    for(let i = 0; i<projects.length; i++){
      projects[i].addEventListener("mouseover", function() {
        document.getElementsByClassName("cursor_on_projects")[0].style.transform = "Scale(1)";
        if(i==0){
          document.getElementsByClassName("cursor_on_projects")[0].style.backgroundImage = "url('../assets/thumbnails/DS_IMG_1.jpg')";
        }
        if(i==1){
          document.getElementsByClassName("cursor_on_projects")[0].style.backgroundImage = "url('../assets/thumbnails/DS_IMG_2.jpg')";
        }
        if(i==2){
          document.getElementsByClassName("cursor_on_projects")[0].style.backgroundImage = "url('../assets/thumbnails/DS_IMG_3.jpg')";
        }
        if(i==3){
          document.getElementsByClassName("cursor_on_projects")[0].style.backgroundImage = "url('../assets/thumbnails/DS_IMG_4.jpg')";
        }
      })
      projects[i].addEventListener("mouseout", function() {
        document.getElementsByClassName("cursor_on_projects")[0].style.transform = "Scale(0)";
      })
    }
}

