import type { Config } from 'drizzle-kit';
import { getEnv } from '../env';

const env = getEnv();

export default {
  schema: './src/db/schema',
  out: './build/drizzle',
  driver: 'pg',
  dbCredentials: {
    host: env.POSTGRES_HOST,
    port: env.POSTGRES_PORT,
    user: env.POSTGRES_USERNAME,
    password: env.POSTGRES_PASSWORD,
    database: env.POSTGRES_DATABASE,
  },
} satisfies Config;
