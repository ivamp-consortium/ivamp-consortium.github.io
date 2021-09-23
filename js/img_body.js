/**
 * This method do the body change the background-image
 * for the image that is currently displayed.
 */

let st, ed

$(window).scroll((e)=>{
    st = $(window).scrollTop()
    ed = $("img").offset().top

    console.log('\n');
    console.log(`scrollTop: ${st}`)
    console.log(`element distacy of top: ${ed}`)
})
