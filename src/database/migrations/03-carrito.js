"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("carrito", {
            id: {type: Sequelize.DataTypes.INTEGER(10).UNSIGNED, primaryKey: true, allowNull: false, autoIncrement: true},
            usuarioFK:{
                type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references:{
                    model:"usuario",
                    key:"id"
                }
            },
            productosFK:{
                type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references:{
                    model:"producto",
                    key:"id"
                }
            },
                createdAt:{type: Sequelize.DataTypes.DATE},
                updatedAt:{type: Sequelize.DataTypes.DATE}
        })
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable("carrito");
    }
  }