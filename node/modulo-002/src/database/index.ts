import { Sequelize } from 'sequelize';
import MODELS, { Model } from '../app/models/';
import mongoose, { Mongoose } from 'mongoose';


const connectOption = require('../config/database');

class Database {

    connection: Sequelize;
    mongoConnection: Mongoose;

    constructor() {
        this.connection = new Sequelize(
            connectOption.database,
            connectOption.username,
            connectOption.password,
            {
                host: connectOption.host,
                dialect: 'postgres',
                define: connectOption.define
            }
        );
        this.mongoConnection = mongoose;

        this.init();
        this.testConnection();
        this.mongo();
    }

    private init() {
        MODELS.forEach((model: Model) => {
            model.load(this.connection);
        });

        MODELS.forEach((model: Model) => {
            model.associate && model.associate(this.connection.models);
        });
    }

    private testConnection() {
        this.connection.authenticate()
            .then(() => {
                console.log('Conectado com sucesso ao banco postgres.');
            })
            .catch((err: any) => {
                console.error('Não foi possivel conectar ao banco:', err);
            });
    }

    async mongo() {
        this.mongoConnection.connect(
            'mongodb://gobarber:gobarber1@ds018248.mlab.com:18248/nstr',
            { useNewUrlParser: true, useFindAndModify: true }
        );

        this.mongoConnection.connection.on('connected', () => {
            console.log('MongoDB conectado com sucesso!');
        });

        this.mongoConnection.connection.on('disconnected', () => {
            console.log('MongoDB desconectado!');
        });

        this.mongoConnection.connection.on('error', e => {
            console.log('MongoDB ERRO: ' + e);
        });

        process.on('SIGINT', () => {
            this.mongoConnection.connection.close(() => {
                console.log('MongoDB desconectado pelo término da aplicação');
                process.exit(0);
            });
        });
    }
}

export default new Database();
