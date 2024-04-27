import { Client } from 'pg';
import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';
import { getEnv } from '../env';

const env = getEnv();

let _db: NodePgDatabase<Record<string, never>>;
let _client: Client;

export async function getDb() {
  if (!_db) {
    // TODO: throw error
  }

  return _db;
}

export async function initDb() {
  _client = new Client({
    host: env.POSTGRES_HOST,
    port: env.POSTGRES_PORT,
    user: env.POSTGRES_USERNAME,
    password: env.POSTGRES_PASSWORD,
    database: env.POSTGRES_DATABASE,
  });

  await _client.connect();

  _db = drizzle(_client);

  return _db;
}

export async function closeDb() {
  if (_client) {
    await _client.end();
  }
}
