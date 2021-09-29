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
        if (page === 'gallery'){
            loadCards()
            // loading
            warning.write_message()
            $('#images').ready(()=>{
                setTimeout(()=>{
                    warning.close()
                    warning.stopMessage()
                }, 5000) // 5 seconds for load all page
            })
        } else if (page === 'people')
            loadPeople()
    })
}

getPage('home')
