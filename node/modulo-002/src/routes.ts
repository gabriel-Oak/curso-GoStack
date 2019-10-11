import express, { Router } from 'express';

const route = Router();

route.get('/', (req, res) => {
    return res.send('hello my frendi ' + req);
});

const APP_ROUTES: Array<express.Router> = [
    route
]

export default APP_ROUTES;
