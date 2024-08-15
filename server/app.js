require('dotenv').config()
const express = require('express');

const apiRouter = require('./routes/api.routes');
const serverConfig = require('./Config/serverConfig');

const app = express()
const PORT = 3000;

// Конфигурация
serverConfig(app);

// Маршрутизиция
app.use('/api', apiRouter);

app.listen(PORT, () => console.log(`Мы сидим на порте ${PORT}`));