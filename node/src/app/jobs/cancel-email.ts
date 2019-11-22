import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import Mailer from "../lib/mailer";

class CancellMail {
    public get key() {
        return 'CancellMail';
    }

    public async handle({ data }: any) {
        const {appointment} = data;
        Mailer.sendMail({
            to: `${appointment.provider.name} <${appointment.provider.email}>`,
            subject: 'Agendamento cancelado',
            template: 'cancelation',
            context: {
                provider: appointment.provider.name,
                user: appointment.user.name,
                date: format(
                    parseISO(appointment.date),
                    "'dia' dd 'de' MMMM', às' H:mm'h'",
                    { locale: pt }
                )
            }
        });
    }
}

export default new CancellMail();
