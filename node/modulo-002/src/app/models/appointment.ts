import { Model, DataTypes, Sequelize } from 'sequelize';

class Appointment extends Model {
    static load(sequelize: Sequelize) {
        this.init({
            date: DataTypes.DATE,
            canceled_at: DataTypes.DATE
        }, {
            sequelize,
            modelName: 'appointment'
        });
    }

    static associate(models: any) {
        this.belongsTo(models.user, { foreignKey: 'user_id', as: 'user' });
        this.belongsTo(models.user, { foreignKey: 'provider_id', as: 'provider' });
    }
}

export default Appointment;
