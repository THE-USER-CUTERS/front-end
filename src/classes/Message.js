export default class Message {
    constructor(name, text){
        this._name = name;
        this._text = text;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get text(){
        return this._text;
    }

    set text(text){
        this._text = text;
    }

}

// module.exports = Message;
