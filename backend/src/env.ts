import 'dotenv/config';
import { cleanEnv, num, str } from 'envalid';

const env = cleanEnv(process.env, {
  API_VERSION: str({ default: 'local' }),
  ENVIRONMENT: str({ default: 'local' }),

  PORT: num({ default: 3000 }),
});

export const getEnv = () => {
  return env;
};
