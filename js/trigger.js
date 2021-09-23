/**
 * Methods for handling "warnings"
 */

class Warning{
    constructor(class_w){
        this.class = '.'+class_w
    }

    open() {
        $(this.class).css('display', 'flex')
    }
    
    close() {
        $(this.class).fadeOut('fast')
    }
}

const warning = new Warning('trigger')
