import { Model, DataTypes, Sequelize } from 'sequelize';
import { isBefore, subHours } from 'date-fns';

class Appointment extends Model {

    static rawAttributes: any;

    static load(sequelize: Sequelize) {
        this.init({
            date: DataTypes.DATE,
            canceled_at: DataTypes.DATE,
            // past: {
            //     type: DataTypes.VIRTUAL(DataTypes.BOOLEAN, ['date']),
            //     get: () => {
            //         console.log(Object.keys(this.fieldAttributeMap));
            //         // console.log((this.rawAttributes.date));

            //         return isBefore(new Date(), new Date());
            //     }
            // },
            // cancelable: {
            //     type: DataTypes.VIRTUAL(DataTypes.BOOLEAN, ['date']),
            //     get: () => isBefore(new Date(), subHours(new Date(), 2))
            // }
        }, {
            sequelize,
            modelName: 'appointment'
        });

        this.addHook('afterFind', async (appointments: any[]) => {
            appointments.forEach(item => {
                const { date } = item.dataValues;

                item.dataValues.past = isBefore(date, new Date());
                item.dataValues.cancelable = isBefore(new Date(), subHours(date, 2))
            });

        });
    }

    static associate(models: any) {
        this.belongsTo(models.user, { foreignKey: 'user_id', as: 'user' });
        this.belongsTo(models.user, { foreignKey: 'provider_id', as: 'provider' });
    }
}

export default Appointment;
