import { Request, Response } from "express";
import { startOfHour, parseISO, isBefore } from 'date-fns'
import AppointmentScope from "./scope";
import User from "../../models/user";
import Appointment from "../../models/appointment";

class AppointmentController {
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

        const checkAvailability = await Appointment.findOne({
            where: {
                provider_id,
                canceled_at: null,
                date: new Date(hourStart).toISOString()
            },
        });

        if (checkAvailability) {
            return res.status(406).json({ message: 'Você já tem um agendamento para este horario' });
        }

        const appoitment = await Appointment.create({
            user_id: req.params.userId,
            provider_id,
            date: hourStart
        });


        return res.json(appoitment);
    }
}

export default new AppointmentController();
