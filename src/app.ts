import express from 'express';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('TalkBoardAuth server running 🚀');
});

export { app };
