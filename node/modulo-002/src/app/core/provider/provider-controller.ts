import { Request, Response } from "express";
import User from "../../models/user";
import File from "../../models/file";
import enviroments from "../../../config/enviroments";


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
                }
            ]
        });

        providers.forEach((provider: any) => {
            provider.avatar.forEach((avatar: any) => {
                avatar.dataValues.url = `${enviroments.api}files/${avatar.path}`
            });
        });

        return res.json(providers);
    }

}

export default new ProviderController();
