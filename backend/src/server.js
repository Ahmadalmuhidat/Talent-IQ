import express from 'express';
import path from 'path';
import { connectToDatabase } from './lib/database.js';
import { ENV } from './lib/env.js';

const app = express();
const __dirname = path.resolve();

if (ENV.NODE_ENV === 'production') {
  // Serve static files from the frontend build directory
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  // Serve index.html for all other routes to support client-side routing
  app.get('/{*any}', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(ENV.PORT, () => {
      console.log(`Server is running on port ${ENV.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();