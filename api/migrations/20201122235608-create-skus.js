'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('skus', { 
      inventory:{
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      price:{
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      sku:{
        primaryKey:true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,  
      },
      productId:{
        //allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: {tableName: 'products'}, key: 'id'},
      }

  })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
