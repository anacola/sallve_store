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
        allowNull: false,
        autoIncrement: false,
        type: Sequelize.INTEGER,
        references: { model: 'Product', key: 'id'}
      },

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
