import jwt from 'jsonwebtoken';
import 'dotenv/config';
// archivo para generar nuevos tokens.

const secret_key = process.env.JWT_SECRET_KEY;

// Funcion que genera un token JWT.
export const generateToken = (userData) => {
    const user = {id: userData.id, email: userData.email};
    // tiempo de expiracion.
    const expiration = { expiresIn: '1h'};

    // genera y retorna un nuevo tokenID con los valores del usuario y el tiempo de expiracion.
    return jwt.sign(user, secret_key, expiration);
};