const Sequelize = require('sequelize');

const alumnoModel = require('./models/alumno');
const menuModel = require('./models/menu');
const asistenciaModel = require('./models/asistencia');
const ventaModel = require('./models/venta');

const sequelize = new Sequelize('cafeteria','root','abcd1234',{
    host: 'localhost',
    dialect: 'mysql'
});

const Alumno = alumnoModel(sequelize,Sequelize);
const Menu = menuModel(sequelize,Sequelize);
const Asistencia = asistenciaModel(sequelize,Sequelize);
const Venta = ventaModel(sequelize,Sequelize);

sequelize.sync({
    force:true
}).then(()=>{
    console.log('Base de datos sincronizada');
});

module.exports = {Alumno, Menu, Asistencia, Venta};