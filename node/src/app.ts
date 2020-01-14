import express, {
    Response,
    Request, NextFunction,
    ErrorRequestHandler
} from 'express';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';

import APP_ROUTES from './routes';
import * as Sentry from '@sentry/node';
import sentryConfig from './config/sentry';

import './database';
import { reset } from 'continuation-local-storage';

const Youch = require('youch');

class App {
    public server: express.Application;

    public constructor() {
        this.server = express();

        Sentry.init(sentryConfig);
        this.server.use(Sentry.Handlers.requestHandler());

        this.middlewares();
        this.routes();
        this.server.use(Sentry.Handlers.errorHandler());

        this.exceptionHandler();
    }

    private middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
        );
    }

    private routes() {
        APP_ROUTES.forEach(route => {
            this.server.use(route);
        });
    }

    private exceptionHandler() {
        this.server.use(async (
            err: ErrorRequestHandler,
            req: Request,
            res: Response,
            _next: NextFunction
        ) => {
            const errors = await new Youch(err, req).toJSON();
            if (process.env.NODE_ENV === 'production') {
                return res.status(500).json({ message: 'Ocorreu um erro interno na aplicação' });
            }
            return res.status(500).json(errors)
        });
    }
}

export default new App().server;
