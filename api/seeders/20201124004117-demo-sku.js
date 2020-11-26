'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('skus', [
      {
        sku: 1,
        inventory: 10,
        price: 24.90,
      },
      {
        sku: 2,
        inventory: 20,
        price: 54.90,
      },
      {
        sku: 3,
        inventory: 15,
        price: 99.90,
      },
      {
        sku: 4,
        inventory: 5,
        price: 59.90,
      }
  ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skus', null, {});
    
  }
};
