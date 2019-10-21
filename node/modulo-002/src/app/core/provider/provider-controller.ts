import { Request, Response } from "express";
import User from "../../models/user";
import File from "../../models/file";


class ProviderController {

    async index(req: Request, res: Response) {
        req;
        const providers = await User.findAll({
            where: { provider: true },
            attributes: ['id', 'name', 'email'],
            include: [
                {
                    model: File,
                    as: 'files',
                    attributes: ['name', 'path'],
                }
            ]
        });

        return res.json(providers);
    }

}

export default new ProviderController();
