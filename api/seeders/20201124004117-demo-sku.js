'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('skus', [
      {
        inventory: 10,
        price: 24.90,
        productId: 1,
      },
      {
        inventory: 20,
        price: 54.90,
        productId: 2,
      },
      {
        inventory: 15,
        price: 99.90,
        productId: 3,
      },
      {
        inventory: 5,
        price: 59.90,
        productId: 4,
      },
      {
        inventory: 10,
        price: 69.90,
        productId: 5,
      },
      {
        inventory: 25,
        price: 89.90,
        productId: 6,
      }

  ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skus', null, {});
    
  }
};
