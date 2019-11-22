import { Request, Response, NextFunction } from "express";
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { keys } from "../../config/keys";

export default async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Token não informado'});
    }

    const [, token] = authHeader.split(' ');

    try {

        const decode: any = await promisify(jwt.verify)(token, keys.jwt_key);
        req.params.userId = decode.id;
        return next();

    } catch(err) {

        return res.status(401).json({
            message: 'Token inválido, efetue login novamente',
            error: err
        });

    }
};
