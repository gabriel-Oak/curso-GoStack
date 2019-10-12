import {Sequelize} from 'sequelize';

export const connectOption = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'gobarber',
    define: {
        timestamps: true,
        undescored: true,
        underscoredAll: true
    }
}

export default connectOption;