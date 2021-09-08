const { Sequelize } = require("sequelize/types");
    function usersData(sequelize, Datatypes){

    alias = 'users';

    cols = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      user_name: {type: Datatypes.STRING(50)},
      user_surname: {type: Datatypes.STRING(50)},
      user_gender: {type: Datatypes.STRING(10)},
      user_email: {type: Datatypes.STRING(100)},
      pass: {type: Datatypes.STRING(8)},
      pass_confirmation: {type: Datatypes.INTEGER},
      user_birth: {type: Datatypes.DATE},
      pais:{type: Datatypes.STRING(3)},
      user_address:{type: Datatypes.STRING(200)},
    }
    
    config = {camelCase: false, timestamps: false};

    const users = sequelize.define(alias,cols,config)

    return users;

   }

    module.exports(usersData);