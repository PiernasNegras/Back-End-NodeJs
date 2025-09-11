import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();
/**
 * @route POST /auth/login
 * @group Autenticación - Endpoints de login
 * @param {string} email.body.required - Email del usuario
 * @param {string} password.body.required - Contraseña del usuario
 * @returns {object} 200 - Devuelve un objeto con el JWT
 * @returns {Error} 401 - Credenciales inválidas
 */
router.post('/login', login);

export default router;
