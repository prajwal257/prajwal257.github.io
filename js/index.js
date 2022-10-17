import {essential_scripts} from "./main.js";
import {home_page_scripts} from "./index_page_scripts.js";


function delay(n) {
  n = n || 2000
  // Keep official documentation wording, done -> resolve
  // and make it more concise
  return new Promise(resolve => {
    setTimeout(resolve, n)
  })
}


function leave_transition(data){
  tl.to(".loader", {
    scale: "3",
    duration: 1,
    ease: "power4.in"
  }).to(".loader .icon", {
    scale: "1",
    duration: .25,
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
  // document.getElementsByClassName("loader")[0].style.transform = "Scale(0)";
  tl.to(".loader .icon", {
    scale: "0.001",
    duration: .25,
  }).to(".loader_container .loader", {
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
        // document.getElementsByClassName("loader")[0].style.transform = "Scale(0)";
        enter_transition();
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
        console.log("Executing Leave")
        console.log("Bye!!")
        const done = this.async();
        leave_transition(data)
        await delay(0);
        done()
      },
      async enter(data) {
        console.log("Executing Enter")
        const done = this.async();
        // document.getElementsByClassName("loader")[0].style.transform = "Scale(0)";
        enter_transition();
        await delay(100);
        done()
      },
      async afterEnter(data) {
        console.log("Executing After Enter")
        after_enter_transition(data)
        try{
          home_page_scripts();
        }catch{
          console.log("either this is not home page or something is very wrong with the projects script")
        }
      }
    }]
  });
