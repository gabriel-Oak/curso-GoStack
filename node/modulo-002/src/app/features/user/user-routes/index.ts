import { Router } from "express";
import userController from "../user-controller";

const USER_ROUTES = Router();

USER_ROUTES.post('/users', userController.store);

export default USER_ROUTES;
