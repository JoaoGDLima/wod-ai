import { OpenAI } from 'openai';
// src/server.js ou outro arquivo principal
import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis de ambiente

const openai = new OpenAI({ 
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.DEEPSEEK_API_KEY 
});

export const getWodFromDeepSeek = async (filtros) => {
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

Formato da resposta:
- Nome do WOD
- Descrição curta motivacional
- Lista de exercícios com reps claras
- Observações finais (se necessário)

Mantenha o volume e intensidade adequados ao nível informado.
`;

  // Alterado para usar o modelo gpt-3.5-turbo
  const completion = await openai.chat.completions.create({
    model: "deepseek-chat",  // Agora usando a versão gratuita do GPT-3.5
    messages: [{ role: 'system', content: prompt }],
    temperature: 0.9
  });

  return completion.choices[0].message.content;
};
