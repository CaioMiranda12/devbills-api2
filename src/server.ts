import 'dotenv/config';
import express, { json } from 'express';

import { setupMongo } from './database';
import { ErrorHandler } from './middlewares/error-handler.middleware';
import { routes } from './routes/index';

setupMongo().then(() => {
  const app = express();

  app.use(json());
  app.use(routes);
  app.use(ErrorHandler);

  app.listen(3333, () => console.log('⚡ App is running at port 3333'));
});
