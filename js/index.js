import {essential_scripts} from "./main.js";
import {home_page_scripts} from "./index_page_scripts.js";


function delay(n) {
  n = n || 2000
  return new Promise(resolve => {
    setTimeout(resolve, n)
  })
}


function leave_transition(data){
  tl.to(".loader", {
    scale: "3",
    duration: 1,
    ease: "power4.in"
  })
}

function after_enter_transition(data){
  // return gsap.from(data.next.container, {
  //   opacity: 0,
  //   delay: 1
  // })
}

//async enter data
function enter_transition(data){
  tl.to(".loader_container .loader", {
    scale: "0.001",
    duration: 1,
    delay: .1,
    ease: "power4.out"
  }).to(".background_blob", {
    scale: 1.001,
    duration: 0.25,
    stagger: 0.2,
    delay: 1.5
  });
}

const tl = gsap.timeline()

barba.init({
  sync: true,
    transitions: [{
      once(data){
        console.log("Executing Once")
        enter_transition(data);
        try{
          essential_scripts();
          try{
            home_page_scripts();
          }catch{
            console.log("either this is not home page or something is very wrong with the projects script")
          }
        }catch{
          console.log("something is not right here")
        }
      },
      async leave(data) {
        const done = this.async();
        leave_transition(data)
        await delay(0);
        done()
      },
      async enter(data) {
        const done = this.async();
        // document.getElementsByClassName("loader")[0].style.transform = "Scale(0)";
        enter_transition(data);
        await delay(1000);
        done()
      },
      async afterEnter(data) {
        //scrolling to top
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        after_enter_transition(data)
        try{
          home_page_scripts();
        }catch{
          console.log("either this is not home page or something is very wrong with the projects script")
        }
      }
    }],
    views: [{
      namespace: 'project',
      beforeEnter() {
        document.getElementsByClassName("cursor_on_projects")[0].style.transform = "Scale(0)";
        document.getElementsByClassName("cursor_follower")[0].style.transform = "scale(0)";
        document.getElementsByClassName("cursor")[0].style.transform = "scale(1)";
      },
      afterEnter(){
        //scrolling to top
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      },
      beforeLeave() {
        //reset the background color.
        document.getElementsByClassName("background")[0].style.backgroundColor = "transparent";
      },
    }]
  });
