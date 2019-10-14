import { Router } from "express";
import UserController from "../user-controller";

const USER_ROUTES = Router();

USER_ROUTES.post('/users', UserController.store);

export default USER_ROUTES;
