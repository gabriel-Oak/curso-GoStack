import { Request, Response } from "express";
import User from "../../models/user";
import File from "../../models/file";
import providerScope from "./provider-scope";
import Appointment from "../../models/appointment";
import { Op } from "sequelize";
import {
    startOfDay,
    endOfDay,
    setHours,
    setMinutes,
    format,
    isAfter,
    setSeconds,
    startOfHour
} from "date-fns";

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

    async available(req: Request, res: Response) {
        const { date } = req.query;

        if (!providerScope.available(req.query)) {
            res.status(400).json({ message: 'É necessário uma data válida' });
        }

        const appointments: Appointment[] = await Appointment.findAll({
            where: {
                provider_id: req.params.id,
                canceled_at: null,
                date: {
                    [Op.between]: [startOfDay(+date), endOfDay(+date)]
                }
            }
        });

        const schdule = [
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00'
        ];

        const available: any[] = schdule.map(time => {
            const [hour, minute] = time.split(':');
            const value = setSeconds(
                setMinutes(setHours(+date, +hour + 1), +minute),
                0
            );

            return {
                time,
                value: format(value, 'yyyy-MM-dd\'T\'HH:mm:ssxxx'),
                available:
                    isAfter(value, new Date()) &&
                    !appointments.find(a => {
                        const hour = new Date(Number(a.get('date'))).getHours() - 1;

                        return format(
                            startOfHour(setHours(Number(a.get('date')), hour)),
                            'HH:mm'
                        ) === time
                    })
            }
        });
        console.log({ available });

        return res.json({ available });
    }

}

export default new ProviderController();
