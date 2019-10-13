import { Router } from 'express';
import USER_ROUTES from './app/features/user/user-routes';


const APP_ROUTES: Array<Router> = [
    USER_ROUTES
]

export default APP_ROUTES;
