function create(req,res,next){
    res.send('Menu create');
}

function list(req,res,next){
    res.send('Menu list');
}

function index(req,res,next){
    res.send('Menu index');
}

function replace(req,res,next){
    res.send('Menu replace');
}

function update(req,res,next){
    res.send('Menu update');
}

function destroy(req,res,next){
    res.send('Menu destroy');
}

module.exports = {
    list, index, create, replace, update, destroy
};