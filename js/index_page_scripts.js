import {projects} from "./scripts/projects.js";
import { recolor_background_blobs } from "./scripts/recolor.js";

export function home_page_scripts(){
    try{
        projects();
        recolor_background_blobs()
    }catch{
        console.log("This is not the projects page or background_blobs")
    }
}