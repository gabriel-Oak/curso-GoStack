const bcrypt = require("bcrypt");
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        'users',
        [
            {
                name: 'Vampeta Mário',
                email: 'vampetinha@dev.com',
                password_hash: bcrypt.hashSync('123456', 8),
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*

    */
  }
};
