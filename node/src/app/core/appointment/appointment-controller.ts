import { Request, Response } from "express";
import {
    startOfHour,
    parseISO,
    isBefore,
    endOfHour,
    format,
    subHours
} from 'date-fns'
import pt from 'date-fns/locale/pt';
import AppointmentScope from "./scope";
import User from "../../models/user";
import Appointment from "../../models/appointment";
import File from "../../models/file";
import { Op } from "sequelize";
import Notification from '../../schemas/notifications';
import Queue from '../../lib/queue';
import CancellMail from '../../jobs/cancel-email';

class AppointmentController {

    async index(req: Request, res: Response) {
        const { page = 1 } = req.query;


        const appointments = await Appointment.findAll({
            where: {
                user_id: req.params.userId,
                canceled_at: null,
            },
            attributes: ['id', 'date'],
            order: ['date'],
            limit: 20,
            offset: (page - 1) * 20,
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
        const hourEnd = endOfHour(parseISO(date));

        if (isBefore(hourStart, new Date())) {
            return res.status(406).json({ message: 'A data do agendamento já passou' });
        }

        const checkAvailability: any = await Appointment.findOne({
            where: {
                provider_id,
                canceled_at: null,
                date: {
                    [Op.between]: [
                        hourStart,
                        hourEnd
                    ]
                }
            },
        });

        if (checkAvailability) {
            return res.status(406).json({
                message: 'Você já tem um agendamento para este horario'
            });
        }

        const appoitment = await Appointment.create({
            user_id: req.params.userId,
            provider_id,
            date
        });

        const user: any = await User.findByPk(req.params.userId);
        const newDate = format(
            parseISO(date),
            "'dia' dd 'de' MMMM', às' H:mm'h'",
            { locale: pt }
        );

        Notification.create({
            content: `Novo agendamento de ${user.name} para ${newDate}`,
            user: provider_id
        });

        return res.json(appoitment);
    }

    async delete(req: Request, res: Response) {
        const { userId, id } = req.params;

        const appointment: any = await Appointment.findByPk(id, {
            include: [
                {
                    model: User,
                    as: 'provider',
                    attributes: ['name', 'email']
                },
                {
                    model: User,
                    as: 'user',
                    attributes: ['name']
                }
            ]
        });

        if (appointment.user_id !== userId) {
            return res.status(401).json({
                message: 'Você não tem permissão para cancelar esse agendamento'
            });
        }

        const dateSub = subHours(appointment.date, 2);

        if (isBefore(dateSub, new Date())) {
            return res.status(401).json({
                message: 'Só é permitido cancelar agendamentos com mais de duas horas de atecedência'
            });
        }

        appointment.canceled_at = new Date();

        await appointment.save();

        await Queue.add(CancellMail.key, {
            appointment
        });

        return res.json(appointment);
    }

}

export default new AppointmentController();
