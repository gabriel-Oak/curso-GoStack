import { Router } from 'express';
import USER_ROUTES from './app/core/user/routes';
import SESSION_ROUTES from './app/core/session/routes';
import FILES_ROUTES from './app/core/file/routes';
import PROVIDERS_ROUTES from './app/core/provider/routes';
import APPOINTMENT_ROUTES from './app/core/appointment/routes';
import SCHEDULE_ROUTES from './app/core/schedule/routes';


const APP_ROUTES: Array<Router> = [
    APPOINTMENT_ROUTES,
    FILES_ROUTES,
    PROVIDERS_ROUTES,
    SCHEDULE_ROUTES,
    SESSION_ROUTES,
    USER_ROUTES
]

export default APP_ROUTES;
