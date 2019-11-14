import request from 'supertest';
import User from '../../src/app/models/user';
import app from '../../src/app';

import "../../src/database";


describe('Authentication', () => {

    let user;

    beforeEach(async () => {
        user = await User.create({
            name: 'Diegay teste',
            password: '1234',
            email: 'teste@teste.com'
        });
    });

    afterEach(async () => {
        await User.destroy({ truncate: true });
    });

    it('Shold login', async () => {
        const response: any = await request(app)
            .post('/session')
            .send({
                email: 'teste@teste.com',
                password: '1234'
            });

        expect(response.status).toBe(200);
        expect(response.body.user.email).toBe('teste@teste.com');
    });

});
