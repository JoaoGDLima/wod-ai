// src/services/claude.service.js
import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';

dotenv.config();

const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY, // chave que você coloca no .env
});

export const getWodFromClaude = async (filtros) => {
  const {
    tipo,
    tempo,
    nivel,
    objetivo,
    equipamentos,
    evitarExercicios = [],
    historico = []
  } = filtros;

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

  const response = await anthropic.messages.create({
    model: 'claude-3-sonnet-20240620',
    max_tokens: 1000,
    temperature: 0.9,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: prompt
          }
        ]
      }
    ]
  });

  return response.content[0].text;
};
