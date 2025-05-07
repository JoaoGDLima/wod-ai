import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'segredo_qualquer';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ erro: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    req.usuario = decoded; // salva info do usuário no request
    next();
  } catch (err) {
    return res.status(401).json({ erro: 'Token inválido' });
  }
};
