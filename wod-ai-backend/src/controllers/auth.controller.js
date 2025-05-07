import jwt from 'jsonwebtoken';

export const login = (req, res) => {
  const { email, senha } = req.body;

  // Aqui seria a validação real com banco de dados. Agora é só simulado.
  if (email === 'teste@email.com' && senha === '123456') {
    const payload = { email }; // Pode colocar mais dados aqui se quiser
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.json({ token });
  }

  res.status(401).json({ error: 'Credenciais inválidas' });
};
