import { Router } from "express";

import multer from 'multer';
import multerConfig from '../../../config/multer';
import ok from '../../middlewares/ok';

import authService from '../../middlewares/auth';
import UserController from "./user-controller";

const upload = multer(multerConfig);

const USER_ROUTES = Router();

USER_ROUTES.post('/users', UserController.store);
USER_ROUTES.put('/users', authService, UserController.update);

USER_ROUTES.post('/users/files', authService, upload.single('file'), ok);

export default USER_ROUTES;
