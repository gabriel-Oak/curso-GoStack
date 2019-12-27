import { Model, DataTypes, Sequelize } from 'sequelize';
import { isBefore, subHours } from 'date-fns';

class Appointment extends Model {

    static rawAttributes: any;

    static load(sequelize: Sequelize) {
        this.init({
            date: DataTypes.DATE,
            canceled_at: DataTypes.DATE
        }, {
            sequelize,
            modelName: 'appointment'
        });

        this.addHook('afterFind', async (appointments: any[]) => {
            appointments.forEach(item => {
                const { date } = item.dataValues;

                item.dataValues.past = isBefore(date, new Date());
                item.dataValues.cancelable = isBefore(new Date(), subHours(date, 2))

                if (item.dataValues.provider.avatar) {
                    item.dataValues.provider.avatar.forEach((avatar: any) => {
                        const { path } = avatar.dataValues;
                        console.log(process.env);

                        avatar.dataValues.url = `${process.env.ROOT_URL}/files/${path}`
                    });
                }
            });

        });
    }

    static associate(models: any) {
        this.belongsTo(models.user, { foreignKey: 'user_id', as: 'user' });
        this.belongsTo(models.user, { foreignKey: 'provider_id', as: 'provider' });
    }
}

export default Appointment;
