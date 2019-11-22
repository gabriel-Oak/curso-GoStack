import * as Yup from 'yup';

class ProviderScope {
    available(data: { date: number }) {
        const schema = Yup.object().shape({
            date: Yup.number().required().min(1570000000000)
        });

        return schema.isValidSync(data);
    }
}

export default new ProviderScope();
