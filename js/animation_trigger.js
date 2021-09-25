/**
 * Rotate background-image with linear-gradient
 */

let i_w = 0

function loop_rotate(class_) {
    $(class_).animate({
        opacity: 1
    }, 10, ()=>{
        i_w = (i_w < 360) ? i_w+1 : 0

        $(class_).css('background-image', `linear-gradient(${i_w}deg, rgb(45, 46, 67), rgb(0, 0, 0))`)

        // if the trigger is displayed in screen, init the loop one more time
        if ($('.trigger').css('display') !== 'none') 
            loop_rotate(class_)
    })
}

loop_rotate('.warning')
