import { server } from './server';
import { initDb } from './db';

const init = async () => {
  await initDb();
  await server();
};

init();
