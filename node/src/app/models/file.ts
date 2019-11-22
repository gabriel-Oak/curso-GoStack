import { Model, DataTypes, Sequelize } from 'sequelize';

class File extends Model {
    static load(sequelize: Sequelize) {
        this.init({
            name: DataTypes.STRING,
            path: DataTypes.STRING,
            user_id: DataTypes.INTEGER
        }, {
            sequelize,
            modelName: 'file'
        });
    }
}

export default File;
