import { Request, Response } from "express";
import { startOfHour, parseISO, isBefore } from 'date-fns'
import AppointmentScope from "./scope";
import User from "../../models/user";
import Appointment from "../../models/appointment";
import File from "../../models/file";

class AppointmentController {

    async index(req: Request, res: Response) {
        const appointments = await Appointment.findAll({
            where: {
                user_id: req.params.userId,
                canceled_at: null,
            },
            attributes: ['id', 'date'],
            order: ['date'],
            include: [{
                model: User,
                as: 'provider',
                attributes: ['id', 'name'],
                include: [{
                    model: File,
                    as: 'avatar',
                    attributes: ['path'],
                    order: ['created_at']
                }]
            }]
        });

        return res.json(appointments);
    }

    async store(req: Request, res: Response) {
        if (!AppointmentScope.store(req.body)) {
            return res.status(400).json({ message: 'Dados inválidos' })
        }

        const { provider_id, date } = req.body;
        const isProvider = await User.findOne({
            where: { id: provider_id, provider: true }
        });

        if (!isProvider) {
            return res.status(401).json({
                message: 'Você precisa de um provedor para criar agendamentos!'
            });
        }

        const hourStart = startOfHour(parseISO(date));

        if (isBefore(hourStart, new Date())) {
            return res.status(406).json({ message: 'A data do agendamento já passou' });
        }

        const checkAvailability: any[] = await Appointment.findAll({
            where: {
                provider_id,
                canceled_at: null
            },
        });

        let invalid = checkAvailability.some(item => {
            const itemHour = startOfHour(item.date);
            if (String(itemHour) === String(hourStart)) { return true; }
            return false;
        });

        if (invalid) {
            return res.status(406).json({
                message: 'Você já tem um agendamento para este horario'
            });
        }

        const appoitment = await Appointment.create({
            user_id: req.params.userId,
            provider_id,
            date
        });


        return res.json(appoitment);
    }
}

export default new AppointmentController();
