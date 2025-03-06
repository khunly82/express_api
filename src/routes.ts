import { Router } from 'express';
import { DefaultController } from './controllers/default.controller';
import { MessageController } from './controllers/message.controller';

export const routes = Router()
    .get('/hello/:name', DefaultController.getHello)
    .get('/message', MessageController.send)