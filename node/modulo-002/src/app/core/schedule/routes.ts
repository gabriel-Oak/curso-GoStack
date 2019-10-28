import { Router } from "express";
import authService from '../../middlewares/auth';
import ScheduleController from './schedule-controller';

const SCHEDULE_ROUTES = Router();

SCHEDULE_ROUTES.get('/schedule', authService, ScheduleController.index);

export default SCHEDULE_ROUTES;
