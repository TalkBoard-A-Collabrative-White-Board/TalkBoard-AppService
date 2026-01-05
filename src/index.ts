import dotenv from 'dotenv';
import { app } from './app.js';
import { connectDB } from './database/index.js';

dotenv.config({
  path: './.env'
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Running On Port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error('DB connection Failed !!!', err);
  });
