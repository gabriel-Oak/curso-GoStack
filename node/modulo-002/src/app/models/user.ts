import { Model, DataTypes, Sequelize } from 'sequelize';


class User extends Model {
    static load(sequelize: Sequelize) {
        this.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password_hash: DataTypes.STRING,
            provider: DataTypes.BOOLEAN,
        }, {
            sequelize,
            modelName: 'User'
        });
    }
}

export default User;