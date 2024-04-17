import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import { getMetadataArgsStorage, useExpressServer } from 'routing-controllers';
import { controllers } from './api';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import * as swaggerUiExpress from 'swagger-ui-express';
import { schemas } from 'api-schemas';

export const server = async () => {
  const app = express();

  // General Middleware
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(morgan('tiny'));

  useExpressServer(app, {
    // TODO: add prefix to env
    routePrefix: '/api',
    controllers: controllers,
  });

  const storage = getMetadataArgsStorage();
  const spec = routingControllersToSpec(
    storage,
    { routePrefix: '/api' },
    // @ts-expect-error types don't match up for some reason
    { components: { schemas: schemas } },
  );

  app.use('/api/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(spec));

  // TODO: add port to env
  app.listen(4000, () => {
    console.log(`Server running in 4000`);
  });
};
