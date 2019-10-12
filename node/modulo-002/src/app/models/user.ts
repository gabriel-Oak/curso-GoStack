import { Model, Sequelize, DataTypes } from 'sequelize';
import { connectOption } from '../../config/database';

const sequelize = new Sequelize(connectOption);

class User extends Model { }

User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    provider: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User'
  }
);
export default User;