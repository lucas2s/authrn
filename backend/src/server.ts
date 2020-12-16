import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';
import routes from './routes'
import errorHandler from './middlewares/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errorHandler);

app.listen(3333, () => {
  console.log('Servidor iniciado na porta 3333')
} );