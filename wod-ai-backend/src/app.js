import express from 'express';
import dotenv from 'dotenv';
import wodRoutes from './routes/wod.routes.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/generate-wod', wodRoutes);
app.use('/auth', authRoutes);

export default app;
