import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import wodRoutes from './routes/wod.routes.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/generate-wod', wodRoutes);
app.use('/auth', authRoutes);

export default app;
