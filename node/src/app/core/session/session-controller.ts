import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import { Request, Response } from "express";
import User from "../../models/user";
import { keys } from '../../../config/keys';
import File from '../../models/file';

class SessionController {
    async store(req: Request, res: Response) {
        const schema = Yup.object().shape({
            email: Yup
                .string()
                .email()
                .required(),
            password: Yup
                .string()
                .required()
        });

        if (!schema.isValidSync(req.body)) {
            return res.status(400).json({ message: 'Dados inválidos' });
        }
        const { email, password } = req.body;
        const user: any = await User.findOne({
            where: { email },
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['name', 'path'],
                    order: ['created_at']
                }
            ]
        });

        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

        if (!user.checkPassword(password, user.password_hash)) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        const { id, name, provider } = user;

        return res.json({
            user: {
                id,
                name,
                email,
                provider
            },
            token: jwt.sign({ id }, keys.jwt_key, {
                expiresIn: '7d'
            })
        })
    }
}


export default new SessionController();
