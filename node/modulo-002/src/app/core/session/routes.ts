import { Router } from "express";
import SessionController from "./session-controller";

const SESSION_ROUTES = Router();

SESSION_ROUTES.post('/session', SessionController.store);

export default SESSION_ROUTES;
