import { Router } from "express";
import AppointmentController from "./appointment-controller";
import authService from "../../middlewares/auth";

const APPOINTMENT_ROUTES = Router();

APPOINTMENT_ROUTES.get('/appointments', authService, AppointmentController.index);
APPOINTMENT_ROUTES.post('/appointments', authService, AppointmentController.store);
APPOINTMENT_ROUTES.delete('/appointments/:id', authService, AppointmentController.delete);

export default APPOINTMENT_ROUTES;
