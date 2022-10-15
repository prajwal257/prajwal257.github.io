elements = document.getElementsByClassName("menu_expanded_link")
targets = document.getElementsByClassName("link_blobs")
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