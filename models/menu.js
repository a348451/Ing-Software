module.exports = (sequelize, type) =>{
    const Menu = sequelize.define('menus',{
        id:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: type.STRING,
        prize: type.FLOAT,
        disponibility: type.BOOLEAN
    });
    return Menu;
}

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name: String,
    _prize: String,
    _disponibility: Boolean
});

class Menu{
    constructor(name, prize, disponibility){
        this._name = name;
        this._prize = prize;
        this._disponibility = disponibility;

    }

    get name(){
        return this._name;
    }

    set name(v){
        this._name = v;
    }

    get prize(){
        return this._prize;
    }

    set prize(v){
        this._prize = v;
    }

    get disponibility(){
        return this._disponibility;
    }

    set disponibility(v){
        this._disponibility = v;
    }
}

schema.loadClass(Menu);

module.exports = mongoose.model('Menu', schema);