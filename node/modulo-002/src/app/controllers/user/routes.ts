import { Router } from "express";
import authService from '../../middlewares/auth';
import UserController from "./user-controller";

const USER_ROUTES = Router();

USER_ROUTES.post('/users', UserController.store);
USER_ROUTES.put('/users', authService, UserController.update);

export default USER_ROUTES;
