import 'dotenv/config';
import { cleanEnv, num, str } from 'envalid';

const env = cleanEnv(process.env, {
  API_VERSION: str({ default: 'local' }),
  ENVIRONMENT: str({ default: 'local' }),

  PORT: num({ default: 3000 }),

  BANNER: str({ default: 'NOT CONFIGURED' }),

  APP_NAME: str({ default: 'Webapp Starter' }),
});

export const getEnv = () => {
  return env;
};
