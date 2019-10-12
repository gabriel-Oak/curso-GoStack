import User from './user';
import { Sequelize } from 'sequelize';

export const MODELS_UNITS = {
    User
};

export interface Model {
    load: (sequelize: Sequelize) => void;
}

const MODELS = [
    User
];

export default MODELS;
