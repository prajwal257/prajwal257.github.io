import {projects} from "./scripts/projects.js";
import { recolor_background_blobs } from "./scripts/recolor.js";
import { recolor_background_blobs_now } from "./scripts/recolor.js";
// import { panzoom } from "./scripts/panzoom.js";

export function home_page_scripts(){
    try{
        projects();
        recolor_background_blobs()
        setInterval(()=>{recolor_background_blobs_now()}, 5000)
    }catch(error){
        console.log("This is not the projects page or background_blobs or panzoom.", error)
    }
}