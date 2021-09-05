"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("usuario",{
            id:{type: Sequelize.Datatypes.INTEGER, primaryKey:true, allowNull: false, autoIncrement: true},
            user_name:{type: Sequelize.Datatypes.STRING(50)},
            user_surname: {type: Sequelize.Datatypes.STRING(50)},
             user_gender: {type: Sequelize.Datatypes.STRING(10)},
             user_email: {type: Sequelize.Datatypes.STRING(100)},
             pass: {type: Sequelize.Datatypes.STRING(8)},
             pass_confirmation: {type: Sequelize.Datatypes.INTEGER},
             user_birth: {type: Sequelize.Datatypes.DATE},
             pais:{type: Sequelize.Datatypes.STRING(3)},
             user_address:{type: Sequelize.Datatypes.STRING(200)},
        })
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable("usuario");
    }
  }