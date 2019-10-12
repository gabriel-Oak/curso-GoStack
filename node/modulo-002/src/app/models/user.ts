import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';



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