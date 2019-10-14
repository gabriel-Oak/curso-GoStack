import { Router } from 'express';
import USER_ROUTES from './app/features/user/user-routes';
import SESSION_ROUTES from './app/features/session/session-routes';


const APP_ROUTES: Array<Router> = [
    SESSION_ROUTES,
    USER_ROUTES
]

export default APP_ROUTES;
