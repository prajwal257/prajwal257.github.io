//....................imports....................

import {custom_cursor} from '../javascript_functions/cursor.js';
import {cursor_on_links} from '../javascript_functions/cursor_on_links.js';
import {cursor_on_projects} from '../javascript_functions/cursor_on_projects.js';
import {cursor_on_design} from '../javascript_functions/cursor_on_design.js';
import {open_nav_on_click} from '../javascript_functions/open_nav_on_click.js';
import {pageEnterAnimation} from '../javascript_functions/pageEnterAnimation.js';
import {pageLeavingAnimationFunction} from '../javascript_functions/pageLeavingAnimation.js';
import {scroll_to_top_after_loading} from '../javascript_functions/scroll_to_top_after_load_is_completed.js';

//....................functions..................

window.onload = function(){
    pageEnterAnimation();
    open_nav_on_click();
    try{

        custom_cursor();
    }
    catch{
        console.log("there was a problem with custom cursor function");
    }
    finally{
        try{
            cursor_on_projects();
        }
        catch{
            console.log("there was a problem with cursor_on_projects function");
        }
        finally{
            try{
                cursor_on_design();
            }
            catch{
                console.log("there was a problem with cursor_on_design function");
            }
            finally{
                scroll_to_top_after_loading();
                pageLeavingAnimationFunction();
                cursor_on_links();
                var rellax = new Rellax('.rellax');
            }
        }
    }
    
}