import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { BrandService } from '@services/brand/BrandService';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import { Container } from 'inversify';
import { BrandRepository } from './repositories/BrandRepository';
import DefaultError from './shared/errors/DefaultError';
import { appDataSource } from './shared/typeorm/appdatasource';
import { BrandController } from './controllers/brand/BrandController';

appDataSource.initialize().then(() => {
  const container = new Container();

  container.bind<BrandRepository>(BrandRepository).toSelf();
  container.bind<BrandService>(BrandService).toSelf();
  container.bind<BrandController>(BrandController).toSelf();

  const app = express();

  app.use(cors());

  const server = new InversifyExpressServer(container, null);
  server.setConfig(app => {
    app.use(express.json());
  });

  const brandController = container.get<BrandController>(BrandController);
  app.use('/brands', brandController._router);

  app.use(
    (
      error: Error,
      request: express.Request,
      response: express.Response,
      next: express.NextFunction,
    ) => {
      if (error instanceof DefaultError) {
        return response.status(error.statusCode!).json({
          status: 'error',
          message: error.message,
        });
      }
      console.log(error);
      return response.status(500).json({
        status: 'error',
        message: `Internal server error: ${error.message}`,
      });
    },
  );

  const port = 3333;
  app.listen(port, () => {
    console.log(`Server running on port ${port} 🏆`);
  });
});
