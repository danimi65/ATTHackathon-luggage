'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
     queryInterface.addColumn( 'Orders', 'route', Sequelize.STRING );
  },

  down: function (queryInterface, Sequelize) {
     queryInterface.removeColumn( 'Orders', 'route' );
  }
};
