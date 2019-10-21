const bcrypt = require("bcrypt");
const keys = require('../../config/keys');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
        'users',
        [
            {
                name: 'Vampeta Mário',
                email: 'vampetinha@dev.com',
                password_hash: bcrypt.hashSync('123456' + keys.hash_key, 8),
                provider: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Gabriel Carvalho',
                email: 'gabriel@dev.com',
                password_hash: bcrypt.hashSync('123456' + keys.hash_key, 8),
                provider: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Sr Cliente',
                email: 'cliente@dev.com',
                password_hash: bcrypt.hashSync('123456' + keys.hash_key, 8),
                provider: false,
                created_at: new Date(),
                updated_at: new Date()
            },
        ], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*

    */
  }
};
