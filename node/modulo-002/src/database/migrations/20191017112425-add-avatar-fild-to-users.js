// Adiciona coluna de avatar aos usuários
'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'files',
            'user_id',
            {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id'},
                onUpdate: 'CASCADE',
                allowNull: false
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('files', 'user_id');
    }
};
