
module.exports=function(sequelize, Datatypes){

  alias = 'Productos'

  cols = {
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
    imagen: {type: Datatypes.STRING(500)},
    nombre: {type: Datatypes.STRING(50)},
    descuento: {type: Datatypes.INTEGER},
    descripcion: {type: Datatypes.STRING(500)},
    precio: { type: Datatypes.INTEGER},
    tamano: { type: Datatypes.INTEGER},
  }
    
  const config = {camelCase: false, timestamps: true, tableName:"producto"}

  const Productos = sequelize.define(alias,cols,config);

    Productos.associate = function(models){
        Productos.belongsToMany(models.Usuarios, {
          as:"producto",
          through: "carrito",
          foreignKey:"productoFK",
          otherKey: "usuarioFK",
          timestamps: false
        })
    }

  return Productos

}
