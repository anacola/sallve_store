'use strict';

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    }, {
      timestamps: false
    });
  Product.associate = function(models){
    Product.hasOne(models.Sku, {
      foreingKey: 'id'
    })
  };
    return Product;
};  