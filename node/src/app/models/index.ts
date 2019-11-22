import { Sequelize } from 'sequelize';
import File from './file';
import User from './user';
import Appointment from './appointment';

export const MODELS_UNITS = {
    User
};

export interface Model {
    load: (sequelize: Sequelize) => void;
    associate?: (models: any) => void;
}

const MODELS = [
    Appointment,
    File,
    User
];

export default MODELS;
