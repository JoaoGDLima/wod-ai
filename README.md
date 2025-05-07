# 🏋️‍♂️ WodAI

Aplicação que gera treinos de CrossFit personalizados usando inteligência artificial.

## 📦 Tecnologias

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **IA**: OpenRouter (modelos como OpenAI, Claude, DeepSeek, etc)
- **Banco de Dados** (opcional): Pode ser integrado posteriormente

## 🎯 Funcionalidades

- Informar tipo de treino, duração, nível, objetivo, equipamentos, etc.
- Receber um WOD completo e formatado pela IA.
- Histórico de treinos (em construção).

## 🚀 Como rodar o projeto

### Backend

```bash
# Entre na pasta do backend
cd wod-ai-backend

# Instale as dependências
npm install

# Crie o arquivo .env com sua chave da API
echo OPENROUTER_API_KEY=xxx >> .env

# Rode o servidor
npm run dev
```

### Frontend

```bash
# Entre na pasta do frontend
cd wod-ai-frontend

# Instale as dependências
npm install

# Rode a aplicação React
npm run dev
```

Acesse o frontend no `http://localhost:5173`.

## 🔑 API Keys

Você precisa de uma chave da OpenRouter:  
👉 [https://openrouter.ai](https://openrouter.ai)

Crie uma conta, gere uma chave e coloque no `.env` do backend:

```
OPENROUTER_API_KEY=sk-...
```

## 🧪 Exemplo de Prompt Enviado

```
Monte um treino no estilo CrossFit com base nas preferências abaixo:

- Tipo de treino: For Time
- Duração: 30 minutos
- Nível: Intermediário
- Objetivo: Emagrecimento
- Equipamentos disponíveis: Kettlebell, barra, corda
- Movimentos a evitar: agachamento
- Histórico recente: WODs com muitos burpees

Formato da resposta:
- Nome do WOD
- Descrição curta motivacional
- Lista de exercícios com reps claras
- Observações finais (se necessário)
```

## 🛠️ Em desenvolvimento

- [ ] Salvar histórico de treinos
- [ ] Compartilhar treinos com amigos
- [ ] Adicionar login com Google

## 👨‍💻 Autor

João Guilherme - [LinkedIn](https://www.linkedin.com)
