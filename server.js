const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Bienvendio a nuestro servidor web');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});