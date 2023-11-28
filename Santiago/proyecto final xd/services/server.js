const express = require('express');
const app = express();
const port = 3000;

const jsonData = require('./data.json'); // Asegúrate de que la ruta sea correcta

app.get('/api/characters', (req, res) => {
  res.json(jsonData.characters);
});

app.get('/api/weapons', (req, res) => {
  res.json(jsonData.weapons);
});

app.get('/api/enemies', (req, res) => {
  res.json(jsonData.enemies);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
