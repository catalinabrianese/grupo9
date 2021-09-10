const { Sequelize } = require("sequelize/types");

    function productsData(sequelize, Datatypes){

      alias = 'Producto';

      cols = {
        id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        imagen: {type: Datatypes.STRING(500)},
        nombre: {type: Datatypes.STRING(50)},
        descuento: {type: Datatypes.INTEGER},
        descripcion: {type: Datatypes.STRING(500)},
        precio: { type: Datatypes.INTEGER},
        tamano: { type: Datatypes.INTEGER},
    }
    
    const config = {camelCase: false, timestamps: false};

    const Producto = sequelize.define(alias,cols,config)

    Producto.associate = function(models){
        Producto.belongsToMany(models.Usuario, {
          as:"producto",
          through: "carrito",
          foreignKey:"productoFK",
          otherKey: "usuarioFK",
          timestamps: false
        });
    }

    return Producto;

   }

    module.exports(productsData);