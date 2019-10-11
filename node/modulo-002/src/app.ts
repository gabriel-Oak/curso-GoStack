import express from 'express';
import cors from 'cors';
import APP_ROUTES from './routes';

class App {
    public server: express.Application;

    public constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
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
}

export default new App().server;
