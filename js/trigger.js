/**
 * Methods for handling "warnings"
 */

class Warning{
    constructor(class_w){
        this.class = '.'+class_w

        this.intervalMessage = 0
        this.letters = '', this.i_letters = ''
        this.index = 0, this.imess = 0, this.timer = 0

        this.messages = [
            "don't worry it's not a loop...",
            "This may take a while, ok?"
        ]

        this.message = '', this.i_message = '', this.h_message = ''
    }

    open() {
        $(this.class).css('display', 'flex')
    }
    
    close() {
        $(this.class).fadeOut('fast')
    }

    set_imess(){
        if (this.imess < this.messages.length-1) this.imess += 1
        else this.imess = 0
    }

    set_mess(text){
        if (this.i_letters !== undefined || text === '')
            this.message = text
    }

    writter(){
        if (this.index < this.letters.length){
            this.index += 1
            this.set_mess(this.h_message + this.i_letters)
        } else{
            this.index = 0

            this.set_imess()

            // redefine i_message
            this.i_message = this.messages[this.imess]

            this.letters = this.i_message.split("")
            this.set_mess('')
        }

        $('.message').html(this.message)
    }

    write_message() {
        // clean the message
        $('.message').text("")

        this.letters = this.messages[0].split("")

        // write message
        this.intervalMessage = setInterval(()=>{
            this.i_message = this.messages[this.imess]
            this.h_message = $('.message').html()
            this.i_letters = this.letters[this.index]

            if (this.h_message !== this.i_message) this.writter()
            else if (this.timer <= 40) this.timer += 1
            else{
                this.timer = 0
                $('.message').text("")
            }
        }, 100)
    }

    stopMessage() {
        clearInterval(this.intervalMessage)
    }
}

const warning = new Warning('trigger')
