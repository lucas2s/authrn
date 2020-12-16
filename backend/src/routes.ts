import { Router } from 'express';

import UserControlador from './controllers/UserController';


const routes = Router();

routes.get('/', (req, res) => { res.send('Aplicação executando!')} );

routes.post('/user', UserControlador.create);
routes.get('/user', UserControlador.list);
routes.get('/user/:id', UserControlador.consult);
routes.delete('/user/:id', UserControlador.delete);
routes.put('/user/:id', UserControlador.update);

export default routes;
