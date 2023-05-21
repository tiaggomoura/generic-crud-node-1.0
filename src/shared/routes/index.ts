import { Router } from 'express';
import brandsRouter from './brand.routes';

const routes = Router();

routes.use('/brands', brandsRouter);

routes.get('/', (_, res) => {
  res.send('Estou no Ar !!!');
});

export default routes;
