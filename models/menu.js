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