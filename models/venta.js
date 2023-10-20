module.exports = (sequelize, type)=>{
    const Venta = sequelize.define('ventas',{
    id:{type: type.INTEGER, autoIncrement: true, primaryKey: true},
    date: type.DATE,
    products: type.STRING,
    total: type.FLOAT
    });
    return Venta
}