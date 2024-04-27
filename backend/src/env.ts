import 'dotenv/config';
import { cleanEnv, num, str } from 'envalid';

const env = cleanEnv(process.env, {
  API_VERSION: str({ default: 'local' }),
  ENVIRONMENT: str({ default: 'local' }),

  PORT: num({ default: 3000 }),

  BANNER: str({ default: 'NOT CONFIGURED' }),

  APP_NAME: str({ default: 'Webapp Starter' }),

  POSTGRES_HOST: str({ default: 'localhost' }),
  POSTGRES_PORT: num({ default: 5432 }),
  POSTGRES_USERNAME: str({ default: 'postgres' }),
  POSTGRES_PASSWORD: str({ default: 'password' }),
  POSTGRES_DATABASE: str({ default: 'admin' }),
});

export const getEnv = () => {
  return env;
};
