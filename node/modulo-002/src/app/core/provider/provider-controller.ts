import { Request, Response } from "express";
import User from "../../models/user";
import File from "../../models/file";

class ProviderController {

    async index(req: Request, res: Response) {
        req;
        const providers: any = await User.findAll({
            where: { provider: true },
            attributes: ['id', 'name', 'email'],
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['name', 'path'],
                    order: ['created_at']
                }
            ]
        });

        return res.json(providers);
    }

}

export default new ProviderController();
