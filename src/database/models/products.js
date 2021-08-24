const { Sequelize } = require("sequelize/types");
    function productsData(sequelize, Datatypes){

    

    alias = 'products';

    cols = {
      id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      imagen: {type: Datatypes.STRING(500)},
      nombre: {type: Datatypes.STRING(50)},
      descuento: {type: Datatypes.INTEGER},
      descripcion: {type: Datatypes.STRING(500)},
      precio: { type: Datatypes.INTEGER},
      tamaño: { type: Datatypes.INTEGER},
  
    }
    config = {camelCase: false, timestamps: false};

    const products = sequelize.define(alias,cols,config)

    return products;

   }

    module.exports(productsData);