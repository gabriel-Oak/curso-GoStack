import User from "../../../models/user"
import { Response, Request } from "express"

class UserController {
    async store(req: Request, res: Response) {
        let user: any = await User.findOne({ where: { email: req.body.email }});
        if (user) {
            return res.status(400).json({ message: 'Email já cadastrado'});
        }

        user = await User.create(req.body || {});
        return res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            provider: user.provider
        });
    }
}

export default new UserController();
