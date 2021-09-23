/**
 * This method do the body change the background-image
 * for the image that is currently displayed.
 */

let st, ed, src, img

$(window).scroll(()=>{
    try{
        st = $(window).scrollTop()
    
        img = 'img.bg'
        ed = ($(img).offset().top - st) + ($(img).height()/2)

        /*
        for debugs

        console.log('\n');
        console.log(`scrollTop: ${st}`)
        console.log(`element distacy of top: ${ed}`)
        */

        if (ed >= 0){
            src = $(img).attr('src')
            $('div.body')
            .css('background-image', `url(${src})`)
        }
    } catch {
        // nothing
    }
})
