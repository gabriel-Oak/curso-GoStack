import { Router } from "express";
import NotificationController from './notification-controller';
import authService from "../../middlewares/auth";

const NOTIFICATIONS_ROUTES = Router();

NOTIFICATIONS_ROUTES.get('/notifications', authService, NotificationController.index);

export default NOTIFICATIONS_ROUTES;
