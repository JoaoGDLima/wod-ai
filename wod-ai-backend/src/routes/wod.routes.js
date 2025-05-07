import express from 'express';
import { generateWodOpenAI, generateWodClaude, generateWodDeepSeek, generateWodOpenRouter} from '../controllers/wod.controller.js';
import { authenticateToken } from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.post('/OpenAI', authenticateToken, generateWodOpenAI);
router.post('/Claude', authenticateToken, generateWodClaude);
router.post('/DeepSeek', authenticateToken, generateWodDeepSeek);
router.post('/OpenRouter', authenticateToken, generateWodOpenRouter);

export default router;
