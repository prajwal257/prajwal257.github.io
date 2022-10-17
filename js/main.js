import {navbar} from "./scripts/navbar.js";
import {cursor} from "./scripts/cursor.js";
import {loader} from "./scripts/loader.js";

export function essential_scripts(){
    try{
        navbar();
        cursor();
        loader();
    }catch{
        console.log("something wrong with navbar, cursor or loader");
    }
}