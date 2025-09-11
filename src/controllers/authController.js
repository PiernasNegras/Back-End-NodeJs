// controllador para mis autenticacion.
import { generateToken } from "../utils/token-generator.js";

const default_user = {
    id: 1,
    email: "user@ejemplo.com",
    password: "OnePiece4321"
};

export const login = async  (req, res) => {
    const { email, password } = req.body;

    // ejemplo de usuario hardcodeado.
    const user = {id:1, email};
    // checkeo que la info mandado por body coincida con el de mi db.
    if (email === default_user.email && password === default_user.password){
        const token = generateToken(user);
        return res.json({token});
    }else{
        return res.sendStatus(401);
    }
};

