import express from 'express';
import routes from './routes/user.routes.js';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.use('/api/v1', routes);

export { app };
