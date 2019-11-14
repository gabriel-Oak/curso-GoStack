import { Sequelize } from 'sequelize';
import MODELS, { Model } from '../app/models/';
import mongoose, { Mongoose } from 'mongoose';


const connectOption = require('../config/database');

class Database {

    connection: Sequelize;
    mongoConnection: Mongoose;

    constructor() {
        this.mongoConnection = mongoose;
        this.connection = new Sequelize(
            connectOption.database,
            connectOption.username,
            connectOption.password,
            connectOption
        );

        const test = String(process.env.NODE_ENV).indexOf('test') !== -1
        this.init();

        if (!test) {
            this.testConnection();
            this.mongo();
        }
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

    private mongo() {
        this.mongoConnection.connect(
            'mongodb://gobarber:gobarber1@ds018248.mlab.com:18248/nstr',
            { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true }
        );

        const { connection } = this.mongoConnection;

        connection.on('connected', () => {
            console.log('MongoDB conectado com sucesso!');
        });

        connection.on('disconnected', () => {
            console.log('MongoDB desconectado!');
        });

        connection.on('error', e => {
            console.log('MongoDB ERRO: ' + e);
        });

        process.on('SIGINT', () => {
            connection.close(() => {
                console.log('MongoDB desconectado pelo término da aplicação');
                process.exit(0);
            });
        });
    }
}

export default new Database();
