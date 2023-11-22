const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _nombre: String,
    _precio: Number,
    _descripcion: String,
    _imagen: String,
});

class Menu{
    constructor(name, prize, desc, img){
        this._nombre = name;
        this._precio = prize;
        this._descripcion = desc;
        this._imagen = img;

    }

    get nombre(){
        return this._nombre;
    }

    set nombre(v){
        this._nombre = v;
    }

    get precio(){
        return this._precio;
    }

    set precio(v){
        this._precio = v;
    }

    get descripcion(){
        return this._descripcion;
    }

    set descripcion(v){
        this._descripcion = v;
    }

    get imagen(){
        return this._imagen;
    }

    set imagen(v){
        this._imagen = v;
    }
}

schema.loadClass(Menu);

module.exports = mongoose.model('Menu', schema);