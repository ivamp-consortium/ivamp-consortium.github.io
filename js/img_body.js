/**
 * This method do the body change the background-image
 * for the image that is currently displayed.
 */

let src, img

function changeBgBody(img="", src_=""){
    try{
        src = (src_ != "") ? src_ : $(img).attr('src')
        $('div.window_body')
        .css('background-image', `url(${src})`)
    } catch {
        // nothing
    }
}
