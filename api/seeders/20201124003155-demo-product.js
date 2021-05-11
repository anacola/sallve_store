'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'hidratante labial',
        image: 'https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-hidratante-labial-5.jpg?v=1617913357',     
      }, 
      {
        name: 'limpador facial',
        image: 'https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-lf-mar-3.jpg?v=1617913320',     
      },       
      {
        name: 'hidratante firmador',
        image: 'https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-firmador-4.jpg?v=1617999135',     
      },  
      {
        name: 'esfoliante enzimático',
        image: 'https://cdn.shopify.com/s/files/1/0074/3486/2639/products/sallve-esfoliante-enzimatico-5.jpg?v=1617913447',     
      }
      {
        name:'bálsamo demaquilante',
        image: 'https://cdn.shopify.com/s/files/1/0074/3486/2639/products/balsamo-demaquilante-2_08a4c49f-d8fa-4567-926a-8a3b02e353f9.jpg?v=1615295866',
      }
      {
        name: 'antioxidante hidratante',
        image: 'https://cdn.shopify.com/s/files/1/0074/3486/2639/files/AH_large.jpg?v=1588577935'
      }
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
    
  }
};
