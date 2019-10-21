import { Router } from "express";
import ProviderController from './provider-controller';

const PROVIDERS_ROUTES = Router();

PROVIDERS_ROUTES.get('/providers', ProviderController.index);

export default PROVIDERS_ROUTES;
