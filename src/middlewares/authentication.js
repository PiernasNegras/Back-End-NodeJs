// Middleware que valida las autenticaciones.
import jwt from 'jsonwebtoken';
import 'dotenv/config';

// Constante con la key de mi .env.
const secret_key = process.env.JWT_SECRET_KEY;

// Middleware para verificar el token JWT.
export const authentication = (req, res, next) => {
    // Obtener y validar existencia del header.
    const authHeader = req.headers.authorization
    if (!authHeader) {
    return res.sendStatus(401) // falta token
    }

  // Desestructurar esquema y token.
    const [scheme, token] = authHeader.split(' ')
    if (scheme !== 'Bearer' || !token) {
    return res.sendStatus(401) // formato inválido
    }

    // Verificar JWT.
    jwt.verify(token, secret_key, (err) => {
    if (err) {
      return res.sendStatus(403) // inválido o expirado
    }
    next();
    })
}