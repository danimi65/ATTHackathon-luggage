'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   queryInterface.addColumn( 'Orders', 'hotel', Sequelize.STRING );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn( 'Orders', 'hotel' );
  }
};
