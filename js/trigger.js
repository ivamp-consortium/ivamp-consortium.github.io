/**
 * Methods for handling "warnings"
 */

class Warning{
    constructor(class_w){
        this.class = '.'+class_w

        this.intervalMessage = 0
    }

    open() {
        $(this.class).css('display', 'flex')
    }
    
    close() {
        $(this.class).fadeOut('fast')
    }

    message() {
        // clean the message
        $('.message').text("")

        let messages = [
            "don't worry it's not a loop...",
            "This may take a while, ok?"
        ]

        let letters = messages[0].split("")
        let i = 0, imess = 0, timer = 0

        function writter(){
            if ($('.message').html() === messages[imess]) $('.message').html("")
            else if (letters[i] !== undefined) $('.message').html($('.message').html() + letters[i])

            if (i < letters.length)
                i += 1
            else{
                i = 0
                if (imess < messages.length)
                    imess += 1
                else
                    imess = 0

                letters = messages[imess].split("")
                $('.message').html("")
            }
        }

        // write message
        this.intervalMessage = setInterval(()=>{
            if ($('.message').html() !== messages[imess]) writter()
            else{
                if (timer <= 40) timer += 1
                else{
                    timer = 0
                    writter()
                }
            }
        }, 100)
    }

    stopMessage() {
        clearInterval(this.intervalMessage)
    }
}

const warning = new Warning('trigger')
