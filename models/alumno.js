module.exports = (sequelize,type)=>{
    const Alumno = sequelize.define('alumnos',{
        id: {type: type.INTEGER, autoIncrement:true, primaryKey: true},
        name: type.STRING,
        lastName: type.STRING,
        matricula: type.INTEGER,
        becaDays: type.INTEGER
    });
    return Alumno;
}