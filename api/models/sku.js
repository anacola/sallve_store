'use strict'
module.exports = (sequelize, DataTypes) => {
    const Sku = sequelize.define('Sku', {
      sku: {
        primaryKey:true,
        type:DataTypes.INTEGER,
      },
      inventory: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      productId:{
          type: DataTypes.INTEGER,
          references: {
            model: 'Product', key: 'id'
          }
      } 
    },{
      timestamps: false
    });

    Sku.associate = function(models){
      Sku.belongsTo(models.Product)
    }
    
    return Sku;
}