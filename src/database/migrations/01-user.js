"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("usuario",{
            id: {type: Sequelize.DataTypes.INTEGER(10), primaryKey:true, allowNull: false, autoIncrement: true},
            user_name: {type: Sequelize.DataTypes.STRING(50)},
            user_surname: {type: Sequelize.DataTypes.STRING(50)},
            user_gender: {type: Sequelize.DataTypes.STRING(10)},
            user_email: {type: Sequelize.DataTypes.STRING(100)},
            pass: {type: Sequelize.DataTypes.STRING(8)},
            user_birth: {type: Sequelize.DataTypes.DATE},
            pais: {type: Sequelize.DataTypes.STRING(3)},
            user_address: {type: Sequelize.DataTypes.STRING(200)},
        })
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable("usuario");
    }
  }