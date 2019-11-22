import * as Yup from 'yup';

interface AppointmentData {
    date?: Date;
    provider_id?: number;
    user_id?: number;
}

const AppointmentScope = {
    store: (data: AppointmentData): boolean => {
        const schema = Yup.object().shape({
            provider_id: Yup.number().required(),
            date: Yup.date().required()
        });
        return schema.isValidSync(data);
    }
}

export default AppointmentScope;
