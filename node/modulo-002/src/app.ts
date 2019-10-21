import express from 'express';
import cors from 'cors';
import path from 'path';
import APP_ROUTES from './routes';

import './database';
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
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
        );
    }

    private routes(): void {
        APP_ROUTES.forEach(route => {
            this.server.use(route);
        });
    }
}

export default new App().server;
