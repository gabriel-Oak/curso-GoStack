import { Model, DataTypes, Sequelize } from 'sequelize';
import md5 from 'md5';
import { keys } from '../../config/keys.expample';

class User extends Model {
    static load(sequelize: Sequelize) {
        this.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.VIRTUAL,
            password_hash: DataTypes.STRING,
            provider: DataTypes.BOOLEAN,
        }, {
            sequelize,
            modelName: 'user'
        });

        this.addHook('beforeSave', async (user: any) => {
            if (user.password) {
                user.password_hash = md5(user.password + keys.hash_key);
            }
        });
    }

    public checkPassword(password: string, password_hash: string): boolean {
        return md5(password + keys.hash_key) === password_hash;
    }
}

export default User;
