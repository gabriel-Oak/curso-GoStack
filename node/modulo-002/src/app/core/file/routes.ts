import { Router } from "express";

import multer from 'multer';
import multerConfig from '../../../config/multer';
import authService from '../../middlewares/auth';
import FileController from "./file-controller";

const upload = multer(multerConfig);


const FILES_ROUTES = Router();

FILES_ROUTES.post('/files', authService, upload.single('file'), FileController.store);

export default FILES_ROUTES;
