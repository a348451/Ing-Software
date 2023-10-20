module.exports = (sequelize, type)=>{
    const Asistencia = sequelize.define('asistencias',{
        id:{type: type.INETEGER, autoIncrement: true, primaryKey: true},
        date: type.DATE,
    });
    return Asistencia;
}