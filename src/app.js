const express = require('express');
const { getUsers } = require('./userService');

const app = express();

app.use(express.json());

app.get('/status', (req, res) => {
  res.status(200).json({ status: 'API Online e CI/CD configurado!' });
});

app.get('/users', async (req, res) => {
  const users = await getUsers();
  res.status(200).json(users);
});

module.exports = app;
