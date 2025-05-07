import { getWodFromOpenAI } from '../services/openai.service.js';
import { getWodFromClaude } from '../services/claude.service.js';
import { getWodFromDeepSeek } from '../services/deepseek.service.js';
import { getWodFromOpenRouter } from '../services/openrouter.service.js';

export const generateWodOpenAI = async (req, res) => {
  try {
    const wod = await getWodFromOpenAI(req.body);
    res.json({ wod });
  } catch (error) {
    console.error('Erro ao gerar WOD:', error);
    res.status(500).json({ error: 'Erro ao gerar WOD com IA' });
  }
};

export const generateWodClaude = async (req, res) => {
  try {
    const filtros = req.body; // Obtenha os filtros do corpo da requisição
    const wod = await getWodFromClaude(filtros);
    res.json({ wod });
  } catch (error) {
    console.error('Erro ao gerar WOD:', error);
    res.status(500).json({ error: 'Erro ao gerar WOD com Claude' });
  }
};

export const generateWodDeepSeek = async (req, res) => {
  try {
    const filtros = req.body; // Obtenha os filtros do corpo da requisição
    const wod = await getWodFromDeepSeek(filtros);
    res.json({ wod });
  } catch (error) {
    console.error('Erro ao gerar DeepSeek:', error);
    res.status(500).json({ error: 'Erro ao gerar WOD com DeepSeek' });
  }
};

export const generateWodOpenRouter = async (req, res) => {
  try {
    const filtros = req.body; // Obtenha os filtros do corpo da requisição
    const wod = await getWodFromOpenRouter(filtros);
    res.json({ wod });
  } catch (error) {
    console.error('Erro ao gerar OpenRouter:', error);
    res.status(500).json({ error: 'Erro ao gerar WOD com OpenRouter' });
  }
};