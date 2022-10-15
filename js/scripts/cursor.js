export default function cursor () {
    let cursor = document.getElementsByClassName("cursor")[0];
    let cursor_follower = document.getElementsByClassName("cursor_follower")[0];  
    document.addEventListener('mousemove',function(e){
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
      cursor_follower.style.top = e.pageY + "px";
      cursor_follower.style.left = e.pageX + "px";
    });
}