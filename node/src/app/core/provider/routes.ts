import { Router } from "express";
import ProviderController from './provider-controller';

const PROVIDERS_ROUTES = Router();

PROVIDERS_ROUTES.get('/providers', ProviderController.index);
PROVIDERS_ROUTES.get('/providers/:id/available', ProviderController.available);

export default PROVIDERS_ROUTES;
