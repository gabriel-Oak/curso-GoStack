import { Request, Response } from "express";
import File from '../../models/file';

class FileController {
    async store(req: Request, res: Response) {
        const { originalname: name, filename: path } = req.file;

        const file = await File.create({
            name,
            path,
            user_id: req.params.userId
        });

        return res.json(file);
    }
}

export default new FileController();
