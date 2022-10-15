const projects = document.getElementsByClassName("project")
let initial_background_color = "#161616";
// console.log(document.getElementsByClassName("CSS_FILE")[0].getAttribute("theme"))

for(let i = 0; i<projects.length; i++){
  projects[i].addEventListener("mouseover", function() {
    document.getElementsByClassName("cursor_on_projects")[0].style.transform = "Scale(1)";
    if(i==0){
      document.getElementsByClassName("cursor_on_projects")[0].style.backgroundImage = "url('../assets/thumbnails/DS_IMG_1.jpg')";
      document.body.style.backgroundColor = "blue";
    }
    if(i==1){
      document.getElementsByClassName("cursor_on_projects")[0].style.backgroundImage = "url('../assets/thumbnails/DS_IMG_2.jpg')";
      document.body.style.backgroundColor = "red";
    }
    if(i==2){
      document.getElementsByClassName("cursor_on_projects")[0].style.backgroundImage = "url('../assets/thumbnails/DS_IMG_3.jpg')";
      document.body.style.backgroundColor = "green";
    }
    if(i==3){
      document.getElementsByClassName("cursor_on_projects")[0].style.backgroundImage = "url('../assets/thumbnails/DS_IMG_4.jpg')";
      document.body.style.backgroundColor = "yellow";
    }
  })
  projects[i].addEventListener("mouseout", function() {
    document.getElementsByClassName("cursor_on_projects")[0].style.transform = "Scale(0)";
    if(document.getElementsByClassName("CSS_FILE")[0].getAttribute("theme")!="dark")
      initial_background_color = "#f5f5f5";
    else
      initial_background_color = "#161616";
    document.body.style.backgroundColor = initial_background_color;
  })
}

function delay(n) {
  n = n || 2000
  // Keep official documentation wording, done -> resolve
  // and make it more concise
  return new Promise(resolve => {
    setTimeout(resolve, n)
  })
}

function leave_transition(data){
  return gsap.to(data.current.container, {
    y: 500,
    opacity: 0,
    duration: .25
  });
}

function enter_transition(data){
  return gsap.from(data.current.container, {
    opacity: 0,
    duration: .5,
    delay: .3
  });
}

barba.init({
  sync: true,
    transitions: [{
      async leave(data) {
        const done = this.async();
        leave_transition(data)
        await delay(1500);
        done()
      },
      async enter(data) {
        const done = this.async();
        enter_transition(data)
        await delay(1500);
        done()
      },
      afterEnter() {
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
    }]
  });
