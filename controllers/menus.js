const Menu = require('../models/menu');

function create(req,res,next){
    const name = req.body.name;
    const prize = req.body.prize;
    const disponibility = req.body.disponibility;

    const menu = new Menu({
        name: name,
        prize: prize,
        disponibility: disponibility
    });

    menu.save().then(obj => res.status(200).json({
        msg: 'Elemento agregado correctamente',
        obj: obj
    })).catch(ex => res.status(500).json({
        msg:'Error al crear elemento',
        obj: ex
    }))

}

function list(req, res, next) {
    Menu.find().then(objs => res.status(200).json({
        msg: 'Menu enlistado',
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: 'No se pudo enlistar Menu',
        obj: ex
    }));
}

function index(req, res,next){
    const id = req.params.id;

    Menu.findOne({"_id": id}).then(obj => res.status(200).json({
        msg: 'Elemento mostrado',
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: 'No se pudo enlistar elemento',
        obj: ex
    }));
}

function replace(req, res,next){
    const id = req.params.id;

    const name = req.body.name;
    const prize = req.body.prize;
    const disponibility = req.body.disponibility;

    const menu = new Object({
        _name: name,
        _prize: prize,
        _disponibility: disponibility
    });

    Menu.findOneAndUpdate({"_id":id}, menu, {new: true}).then(obj => res.status(200).json({
        msg: `Elemento con id ${id} reemplazado correctamente`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: `No se pudo reemplazar elemento con id ${id}`,
        obj: ex
    }));
}

function update(req, res,next){
    const id = req.params.id;

    const name = req.body.name;
    const prize = req.body.prize;
    const disponibility = req.body.disponibility;

    const menu = new Object();
    if(name) menu._name = name;
    if(prize) menu._prize = prize;
    if(disponibility) menu._disponibility = disponibility;

    Menu.findOneAndUpdate({"_id":id}, menu).then(obj => res.status(200).json({
        msg: 'Elemento actualizado corerctamente',
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: `No se pudo actualizar elemento con id ${id}`,
        obj: ex
    }));
}

function destroy(req, res,next){
    const id = req.params.id;

    Menu.findByIdAndDelete({"_id":id}).then(obj => res.status(200).json({
        msg: `Elemento con ID ${id} eliminado correctamente`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: `No se pudo eliminar elemento con el id ${id}`,
        obj: ex
    }));
}

module.exports = {list, index, create, replace, update, destroy};