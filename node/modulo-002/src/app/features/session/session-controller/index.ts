import jwt from 'jsonwebtoken';
import { Request, Response } from "express";
import User from "../../../models/user";
import { keys } from '../../../../config/keys';

class SessionController {
    async store(req: Request, res: Response) {
        const { email, password } = req.body;
        const user: any = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }

        if (!user.checkPassword(password, user.password_hash)) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email
            },
            token: jwt.sign({ id }, keys.jwt_key, {
                expiresIn: '7d'
            })
        })
    }
}


export default new SessionController();
