/**
 * return the page in div#root according to
 * current context
 */
function getPage(page){
    $.ajax({
            method: "GET",
            url: `./pages/${page}.html`,
            beforeSend: ()=>{
                $('div#root').html(`<h2 class="loading">Loading page: "${page}"</h2>`);
            }
        }).done((file) => {
            $('div#root').html(file)
    })
}

getPage('home')
