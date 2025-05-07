import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'segredo_qualquer';

export const gerarToken = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn: '1d' }); // expira em 1 dia
};
