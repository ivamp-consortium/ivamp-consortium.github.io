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
            $('#images').css("display", 'none')
            $('#images').ready(()=>{
                warning.close()
                warning.stopMessage()
                $('#images').css('display', 'block')
            })
        } else if (page === 'people')
            loadPeople()
    })
}

getPage('home')
