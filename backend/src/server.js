import express from 'express';
import path from 'path';
import cors from 'cors';
import { connectToDatabase } from './lib/database.js';
import { serve } from 'inngest/express';
import { ENV } from './lib/env.js';
import { inngest, functions } from './lib/inngest.js';

const app = express();
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cors({
  origin: ENV.CLIENT_URL,
  credentials: true
}));

app.use('/api/inngest', serve({
  client: inngest,
  functions: functions
}));

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