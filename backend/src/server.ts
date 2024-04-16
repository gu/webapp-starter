// server.ts
import { createServer } from 'http';
import express from 'express';

export const server = async () => {
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello brother!');
  });

  const server = createServer(app);

  server.listen(4000, () => {
    console.log(`Server running in 4000`);
  });
};
