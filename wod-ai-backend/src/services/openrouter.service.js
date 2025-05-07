import { OpenAI } from 'openai';
// src/server.js ou outro arquivo principal
import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis de ambiente

const openai = new OpenAI({ 
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPENROUTER_API_KEY 
});

export const getWodFromOpenRouter = async (filtros) => {
  const { tipo, tempo, nivel, objetivo, equipamentos, evitarExercicios = [], historico = [] } = filtros;

  const prompt = `
Monte um treino no estilo CrossFit com base nas preferências abaixo:

- Tipo de treino: ${tipo}
- Duração: ${tempo} minutos
- Nível: ${nivel}
- Objetivo: ${objetivo}
- Equipamentos disponíveis: ${equipamentos.join(', ')}
- Movimentos a evitar: ${evitarExercicios.join(', ') || 'nenhum'}
- Histórico recente: ${historico.join(', ') || 'nenhum'}

Formato da resposta deve ser um markdown:
- Nome do WOD
- Lista de exercícios com reps claras
- Observações finais (se necessário)

Mantenha o volume e intensidade adequados ao nível informado.
`;

  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-prover-v2:free", 
    messages: [{ role: 'user', content: prompt }],
  });

  return completion.choices[0].message.content;
};
