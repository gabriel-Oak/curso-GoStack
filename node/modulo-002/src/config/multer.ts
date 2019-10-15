import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';
import { Request } from 'express';

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req: Request, file: any, callback: Function) => {
            crypto.randomBytes(16, (err: Error | null, res: Buffer) => {
                if (err) { return callback(err); }

                return callback(null, res.toString('hex') + extname(file.originalname));
            })
        }
    }),
}
