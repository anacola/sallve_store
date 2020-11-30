'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', { 
      id:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      name:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      image:{
      allowNull: false,
      type: Sequelize.STRING,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products')
  
  }
};
