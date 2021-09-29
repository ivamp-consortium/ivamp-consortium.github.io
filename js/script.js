/**
 * For you do anything using JS and jQuery.
 * 
 * --by erikfritas
 */

let src_, p_

function close_window() {
    $('div.window_body').fadeOut('slow')
}

$('body').on('mousemove', ()=>{
    p_ = $('img:hover + p').html()
    src_ = $('img:hover').attr('src')
    if (src_ != undefined){
        changeBgBody('', src_)
        $('div.window_body div.window_description').html(`${p_}`)
    }

    $('.card, .card img').on('click', ()=>{
        $('div.window_body').fadeIn('fast', ()=>{
            $('div.window_body').css('display', 'flex')
        })
    })

    if ($('div.window_body').css('display') != 'none'){
        $('div.window_body').on('mousemove', ()=>{
            $('div.window_body div.window_description').fadeIn('fast')
        }).on('mouseleave', ()=>{
            $('div.window_body div.window_description').fadeOut('fast')
        })
    }
})
