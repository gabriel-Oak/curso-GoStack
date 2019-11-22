import * as Yup from 'yup';

interface UserData {
    name?: string;
    email?: string;
    passwordd?: string;
    oldPassword?: string;
    confirmPassword?: string;
}

const UserScope = {
    store: (data: UserData): boolean => {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6)
        });

        return schema.isValidSync(data);
    },

    update: (data: UserData): boolean => {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email(),
            oldPassword: Yup.string().min(6),
            password: Yup.string().min(6).when(
                'oldPassword',
                (oldPassword: string, field: any) => oldPassword ? field.required() : field
            ),
            confirmPassword: Yup.string().when(
                'password',
                (password: string, field: any) =>
                    password ? field.required().oneOf([Yup.ref('password')]) : field
            )
        });

        return schema.isValidSync(data);
    },
}

export default UserScope;
