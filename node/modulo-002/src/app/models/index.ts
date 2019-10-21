import { Sequelize } from 'sequelize';
import File from './file';
import User from './user';

export const MODELS_UNITS = {
    User
};

export interface Model {
    load: (sequelize: Sequelize) => void;
    associate?: (models: any) => void;
}

const MODELS = [
    File,
    User
];

export default MODELS;
