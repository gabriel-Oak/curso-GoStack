import { Response } from "express";
import { Request } from "express-serve-static-core";

export default async (req: Request, res: Response) => {
    req.params.ok = 'ok';
    res.json({ ok: true });
}
