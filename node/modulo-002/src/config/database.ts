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

const sequelize = new Sequelize(
    connectOption.database,
    connectOption.username,
    connectOption.password,
    {
        host: connectOption.host,
        dialect: 'postgres',
        define: connectOption.define
    }
);

export default sequelize;