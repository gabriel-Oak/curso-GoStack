import express from 'express';
import cors from 'cors';
import APP_ROUTES from './routes';
import sequelize from './config/database';

class App {
    public server: express.Application;

    public constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
        this.testConnection();
    }

    private middlewares(): void {
        this.server.use(express.json());
        this.server.use(cors());
    }

    private routes(): void {
        APP_ROUTES.forEach(route => {
            this.server.use(route);
        });
    }

    private testConnection() {
        sequelize.authenticate()
            .then(() => {
                console.log('Conectado com sucesso ao banco.');
            })
            .catch((err: any) => {
                console.error('Não foi possivel conectar ao banco:', err);
            });
    }
}

export default new App().server;
