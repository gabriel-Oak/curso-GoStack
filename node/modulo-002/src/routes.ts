import { Router } from 'express';
import USER_ROUTES from './app/controllers/user/routes';
import SESSION_ROUTES from './app/controllers/session/routes';


const APP_ROUTES: Array<Router> = [
    SESSION_ROUTES,
    USER_ROUTES
]

export default APP_ROUTES;
