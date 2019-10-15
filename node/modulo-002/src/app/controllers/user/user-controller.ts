import * as Yup from 'yup';
import User from "../../models/user"
import { Response, Request } from "express"

class UserController {
    async store(req: Request, res: Response) {
        const schema = Yup.object().shape({
            name: Yup
                .string()
                .required(),
            email: Yup
                .string()
                .email()
                .required(),
            password: Yup
                .string()
                .required()
                .min(6)
        });

        if (!schema.isValidSync(req.body)) {
            return res.status(400).json({ message: 'Dados inválidos' });
        }

        let user: any = await User.findOne({ where: { email: req.body.email } });
        if (user) {
            return res.status(400).json({ message: 'Email já cadastrado' });
        }

        user = await User.create(req.body || {});
        return res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
            provider: user.provider
        });
    }

    async update(req: Request, res: Response) {
        const schema = Yup.object().shape({
            name: Yup
                .string()
                .required(),
            email: Yup
                .string()
                .email(),
            oldPassword: Yup
                .string()
                .min(6),
            password: Yup
                .string()
                .min(6)
                .when('oldPassword', (oldPassword: string, field: any) =>
                    oldPassword ? field.required() : field
                ),
            confirmPassword: Yup
                .string()
                .when('password', (password: string, field: any) =>
                    password ? field.required().oneOf([Yup.ref('password')]) : field
                )
        });

        if (!schema.isValidSync(req.body)) {
            return res.status(400).json({ message: 'Dados inválidos' });
        }

        const { email, oldPassword } = req.body;
        const { userId } = req.params;

        let user: any = await User.findByPk(userId);

        if (email !== user.email) {
            const emailDuplicated = await User.findOne({ where: { email } });
            if (emailDuplicated) {
                return res.status(400).json({ message: 'Email já cadastrado' });
            }
        }

        if (oldPassword && !user.checkPassword(oldPassword, user.password_hash)) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        user = await user.update(req.body);

        return res.json({
            id: userId,
            name: user.name,
            email: user.email,
            provider: user.provider
        });
    }
}

export default new UserController();
