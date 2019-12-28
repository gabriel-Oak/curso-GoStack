import app from './app';

const port = 3000

app.listen(port || process.env.port, () => {
    console.log(`Rodando na ${port}`);
});
