import app from './app';

const port = 3001

app.listen(port || process.ENV.port, () => {
    console.log(`Rodando na ${port}`);
});
