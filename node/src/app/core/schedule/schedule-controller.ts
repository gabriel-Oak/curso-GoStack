import { Request, Response } from "express";
import User from "../../models/user";
import Appointment from "../../models/appointment";
import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

class ScheduleController {
    async index(req: Request, res: Response) {
        const isProvider = await User.findOne({
            where: {
                id: req.params.userId,
                provider: true
            }
        });

        if (!isProvider) {
            return res.status(401).json({
                message: 'Você precisa estar autenticado como provedor!'
            });
        }

        const { date } = req.query;
        const parsedDate = parseISO(date);

        const appointments = await Appointment.findAll({
            where: {
                provider_id: req.params.userId,
                canceled_at: null,
                date: {
                    [Op.between]: [
                        startOfDay(parsedDate),
                        endOfDay(parsedDate)
                    ]
                }
            },
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['name']
                }
            ],
            order: ['date']
        });

        return res.json(appointments);
    }
}

export default new ScheduleController();
