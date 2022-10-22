import {projects} from "./scripts/projects.js";
import { recolor_background_blobs } from "./scripts/recolor.js";
import { panzoom } from "./scripts/panzoom.js";

export function home_page_scripts(){
    try{
        projects();
        recolor_background_blobs()
        // panzoom();
    }catch{
        console.log("This is not the projects page or background_blobs or panzoom.")
    }
}