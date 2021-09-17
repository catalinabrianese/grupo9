/*const { Sequelize } = require("/sequelize/types");*/
module.exports=function(sequelize, Datatypes){

    alias = 'Usuarios';

    cols = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      user_name: {type: Datatypes.STRING(50)},
      user_surname: {type: Datatypes.STRING(50)},
      user_gender: {type: Datatypes.STRING(10)},
      user_email: {type: Datatypes.STRING(100)},
      pass: {type: Datatypes.STRING(8)},
      user_birth: {type: Datatypes.DATE},
      pais:{type: Datatypes.STRING(3)},
      user_address:{type: Datatypes.STRING(200)},
    };
    
    let config = {camelCase: false, timestamps: false, tableName:"usuario"};

    const Usuarios = sequelize.define(alias,cols,config);

    
    Usuarios.associate = function(models){
      Usuarios.belongsToMany(models.Productos, {
        as:"usuario",
        through: "carrito", /*crea la tabla intermedia*/
        foreignKey:"usuarioFK",
        otherKey: "productoFK",
        timestamps: false
      });

    }
    return Usuarios;

   }
