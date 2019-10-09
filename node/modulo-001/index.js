const express = require('express');

const app = express();

app.use(express.json());


const users = ['Diego', 'Robson', 'Victor'];

app.use((req, res, next) => {
    console.log(`Medoto: ${req.method}; URL: ${req.url}`);
    
    return next();
});

function checkUserExists(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({error: 'A propriedade name é obrigatória!'});
    }

    return next();
}

function checkUserInArray(req, res, next) {
    const user = users[req.params.index]; 
    if (!user) {
        return res.status(400).json({error: 'O usuario não existe!'});
    }

    req.user = user;
    return next();
}

app.get('/users', (req, res) => {
    return res.json(users);
});

app.get('/users/:index', checkUserInArray, (req, res) => {
    const { index } = req.params;

    return res.json(req.user);
});

app.post('/users', checkUserExists, (req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

app.put('/users/:index', checkUserExists, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;

    return res.json(users);
});

app.delete('/users/:index', checkUserInArray,(req, res) => {
    const { index } = req.params;

    users.splice(index, 1);

    return res.send();
});

app.listen(3001);
console.log('Started');