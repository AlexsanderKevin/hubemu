import express from "express"

const app = express()

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Iniciar o servidor
const port = process.env['VITE_DEV_SERVER_URL'];
app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});