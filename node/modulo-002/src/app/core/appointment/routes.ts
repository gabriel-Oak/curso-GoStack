import { Router } from "express";
import AppointmentController from "./appointment-controller";
import authService from "../../middlewares/auth";

const APPOINTMENT_ROUTES = Router();

APPOINTMENT_ROUTES.post('/session', authService, AppointmentController.store);

export default APPOINTMENT_ROUTES;
