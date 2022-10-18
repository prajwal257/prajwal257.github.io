import {projects} from "./scripts/projects.js";
import {india_hover_effect} from "./scripts/india_hover_effect.js";

export function home_page_scripts(){
    try{
        india_hover_effect()
        projects();
        recolor_background_blobs()
    }catch{
        console.log("This is not the projects page or background_blobs")
    }
}