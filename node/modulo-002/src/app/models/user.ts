import { Model, DataTypes, Sequelize } from 'sequelize';
import { keys } from '../../config/keys.expample';
import bcrypt from 'bcrypt';

class User extends Model {
    static load(sequelize: Sequelize) {
        this.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.VIRTUAL,
            password_hash: DataTypes.STRING,
            provider: DataTypes.BOOLEAN
        }, {
            sequelize,
            modelName: 'user'
        });

        this.addHook('beforeSave', async (user: any) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password + keys.hash_key, 8);
            }
        });
    }

    static associate(models: any) {
        this.hasMany(models.file, { foreignKey: 'user_id', as: 'avatar' });
    }

    public checkPassword(password: string, password_hash: string): boolean {
        return bcrypt.compareSync(password + keys.hash_key, password_hash);
    }
}

export default User;
