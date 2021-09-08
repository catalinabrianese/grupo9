"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("producto", {
            id: {type: Sequelize.DataTypes.INTEGER(10), primaryKey:true, allowNull: false, autoIncrement: true},
            imagen: {type: Sequelize.DataTypes.STRING(500)},
            nombre: {type: Sequelize.DataTypes.STRING(50)},
            descuento: {type: Sequelize.DataTypes.INTEGER(3)},
            descripcion: {type: Sequelize.DataTypes.STRING(500)},
            precio: {type: Sequelize.DataTypes.INTEGER(6)},
            tamano: {type: Sequelize.DataTypes.INTEGER(5)},
            createdAt: {type: Sequelize.DataTypes.DATE},
            updatedAt: {type: Sequelize.DataTypes.DATE}
        })
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable("producto");
    }
 }