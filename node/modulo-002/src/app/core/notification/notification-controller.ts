import Notification from '../../schemas/notifications';
import { Request, Response } from 'express';
import User from '../../models/user';

class NotificationController {
    async index(req: Request, res: Response) {
        const { userId } = req.params;

        const isProvider = await User.findOne({
            where: { id: userId, provider: true }
        });

        if (!isProvider) {
            return res.status(401).json({
                message: 'Você precisa de um provedor para criar agendamentos!'
            });
        }

        const notifications = await Notification.find({ user: userId });
        return res.json(notifications);
    }

    async update(req: Request, res: Response) {

        const notification: any = await Notification.findByIdAndUpdate(
            req.params.id,
            { read: true },
            { new: true }
        );

        res.json(notification);
    }
}

export default new NotificationController();
