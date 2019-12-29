import User from "../../models/user"
import { Response, Request } from "express"
import UserScope from './scope';
import File from "../../models/file";

class UserController {
    async store(req: Request, res: Response) {

        if (!UserScope.store(req.body)) {
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

        if (!UserScope.update(req.body)) {
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

        user  = await User.findByPk(userId, {
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['name', 'path'],
                    order: ['created_at']
                }
            ]
        });

        const { name, provider } = await user.update(req.body);

        return res.json({
            id: userId,
            name,
            email,
            avatar: user.avatar,
            provider: provider
        });

    }
}

export default new UserController();
