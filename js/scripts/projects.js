export function projects() {
    const projects = document.getElementsByClassName("project")
    const cursor_on_projects = document.getElementsByClassName("cursor_on_projects")[0];
    const body_background = document.getElementsByClassName("background")[0];
    for(let i = 0; i<projects.length; i++){
      projects[i].addEventListener("mouseover", function() {
        cursor_on_projects.style.transform = "Scale(1)";
        cursor_on_projects.style.backgroundImage = `url(../assets/thumbnails/DS_IMG_${i+1}.jpg)`;
        const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        body_background.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
        // if(i==0){
        //   
        // }
        // if(i==1){
        //   cursor_on_projects.style.backgroundImage = "url('../assets/thumbnails/DS_IMG_2.jpg')";
        //   body_background.style.backgroundColor = "indigo";
        // }
        // if(i==2){
        //   cursor_on_projects.style.backgroundImage = "url('../assets/thumbnails/DS_IMG_3.jpg')";
        //   body_background.style.backgroundColor = "pink";
        // }
        // if(i==3){
        //   cursor_on_projects.style.backgroundImage = "url('../assets/thumbnails/DS_IMG_4.jpg')";
        //   body_background.style.backgroundColor = "yellow";
        // }
        // if(i==4){
        //   cursor_on_projects.style.backgroundImage = "url('../assets/thumbnails/DS_IMG_1.jpg')";
        //   body_background.style.backgroundColor = "red";
        // }
        // if(i==5){
        //   cursor_on_projects.style.backgroundImage = "url('../assets/thumbnails/DS_IMG_2.jpg')";
        //   body_background.style.backgroundColor = "grey";
        // }
      })
      projects[i].addEventListener("mouseout", function() {
        cursor_on_projects.style.transform = "Scale(0)";
        body_background.style.backgroundColor = "transparent"
      })
    }
}

