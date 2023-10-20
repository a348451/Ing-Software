const {Menu} = require('../db');

function create(req,res,next){
    const name = req.body.name;
    const prize = req.body.prize;
    const disponibility = req.body.disponibility;
    Menu.create({
        name: name,
        prize: prize,
        disponibility: disponibility
    }).then(object => res.json(object)).catch(err=>res.send(err));
}

function list(req, res, next) {
    Menu.findAll().then(objects=>res.json(objects)).catch(err=>res.send(err));
}

function index(req, res,next){
    const id = req.params.id;
    Menu.findByPk(id).then(object => res.json(object)).catch(err=>res.send(err));
}

function replace(req, res,next){
    const id = req.params.id;
    Menu.findByPk(id).then(object => {
        const name = req.body.name ? req.body.name : "";
        const prize = req.body.prize ? req.body.prize : "";
        const disponibility = req.body.disponibility ? req.body.disponibility : ""; 
        object.update({
            name: name,
            prize: prize,
            disponibility: disponibility
        }).then(obj => res.json(obj)).catch(err=>res.send(err));
    }).catch(err=> res.send(err));
}

function update(req, res,next){
    const id = req.params.id;
    Menu.findByPk(id).then(object=>{
        const name = req.body.name ? req.body.name : object.name;
        const prize = req.body.prize ? req.body.prize : object.prize;
        const disponibility = req.body.disponibility ? req.body.disponibility : object.disponibility; 
        object.update({
            name: name,
            prize: prize,
            disponibility: disponibility
        }).then(obj => res.json(obj)).catch(err=>res.send(err));
    }).catch(err=>res.send(err));
}

function destroy(req, res,next){
    const id = req.params.id;
    Menu.destroy({where: {id: id}}).then(object => res.json(object)).catch(err=>res.send(err));
}

module.exports = {list, index, create, replace, update, destroy};