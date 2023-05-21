import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import DefaultError from './shared/errors/DefaultError';
import { appDataSource } from './shared/typeorm/appdatasource';
import routes from './shared/routes';

appDataSource.initialize().then(() => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(routes);

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
