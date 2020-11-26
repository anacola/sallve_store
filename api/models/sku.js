'use strict'
module.exports = (sequelize, DataTypes) => {
    const Sku = sequelize.define('Sku', {
      sku: DataTypes.INTEGER,
      inventory: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
    },{
      timestamps: false
    });

    Sku.associate = function(models){
      Sku.belongsTo(models.Product)
    }
    
    return Sku;
}