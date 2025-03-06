import { Router } from 'express';
import { DefaultController } from './controllers/default.controller';

export const routes = Router()
    .get('/hello/:name', DefaultController.getHello);