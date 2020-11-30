'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'hidratante labial',
        image: 'http://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-hidratante-labial-1.jpg?v=1605541986',     
      }, 
      {
        name: 'limpador facial',
        image: 'http://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-limpador-facial-1.jpg?v=1597658319',     
      },       
      {
        name: 'hidratante firmador',
        image: 'http://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-hidratante-firmador.jpg?v=1597658578',     
      },  
      {
        name: 'esfoliante enzimático',
        image: 'http://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-esfoliante-enzimatico-1-a.jpg?v=1597658287',     
      }
      {
        name:'bálsamo demaquilante',
        image: 'http://cdn.shopify.com/s/files/1/0074/3486/2639/products/balsamo-demaquilante-1.jpg?v=1601986306',
      }
      {
        name: 'antioxidante hidratante',
        image: 'http://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-antioxidante-hidratante-1.jpg?v=1605127205'
      }
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
    
  }
};
