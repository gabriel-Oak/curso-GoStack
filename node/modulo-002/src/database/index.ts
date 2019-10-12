import { Sequelize } from 'sequelize';
import MODELS, {Model} from '../app/models/';
import connectOption from '../config/database';

class Database {

    connection: Sequelize;

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

        this.init();
        this.testConnection();
    }

    init() {
        MODELS.forEach( (model: Model) => {
            model.load(this.connection);
        })
    }

    private testConnection() {
        this.connection.authenticate()
            .then(() => {
                console.log('Conectado com sucesso ao banco.');
            })
            .catch((err: any) => {
                console.error('Não foi possivel conectar ao banco:', err);
            });
    }
}

export default new Database();