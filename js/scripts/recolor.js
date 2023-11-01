export function recolor_background_blobs(){
    const trigger_button = document.getElementById("recolor_background");
    const background_blobs = document.getElementsByClassName("background_blob")
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    trigger_button.addEventListener("click", function() {
        for(let i=0; i<background_blobs.length; i++){
            background_blobs[i].style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
        }
    })
}
export function recolor_background_blobs_now(){
    const background_blobs = document.getElementsByClassName("background_blob")
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    for(let i=0; i<background_blobs.length; i++){
        background_blobs[i].style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
    }
}