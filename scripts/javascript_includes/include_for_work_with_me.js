//....................imports....................

import {custom_cursor} from '../javascript_functions/cursor.js';
import {open_nav_on_click} from '../javascript_functions/open_nav_on_click.js';
import {pageLeavingAnimationFunction} from '../javascript_functions/pageLeavingAnimation.js';
import {pageEnterAnimation} from '../javascript_functions/pageEnterAnimation.js';

//....................functions..................

window.onload = function(){
    pageEnterAnimation();
    open_nav_on_click();
    try{
        custom_cursor();
    }
    catch{
        console.log("shit happened");
    }
    finally{
        pageLeavingAnimationFunction();
    }
    
    var rellax = new Rellax('.rellax');
}