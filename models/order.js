'use strict';
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    billing_address: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    email: DataTypes.STRING,
    drop_off: DataTypes.DATE,
    pick_up: DataTypes.DATE,
    luggage: DataTypes.INTEGER,
    route: DataTypes.STRING,
    hotel: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Order;
};