import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { initDb, closeDb } from './index';

const runMigrations = async () => {
  const db = await initDb();

  await migrate(db, { migrationsFolder: './build/drizzle' });

  await closeDb();
};

runMigrations();
