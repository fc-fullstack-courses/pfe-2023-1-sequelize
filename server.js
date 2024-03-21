const express = require('express');
const router = require('./routers');
const basicErrorHandler = require('./middlewares/errors');
const config = require('./configs/server.json');
const CONSTANTS = require('./constants');

const app = express();

app.use(express.json());
app.use(express.static(CONSTANTS.PUBLIC_FILE_PATH));
app.use(router);

app.use(basicErrorHandler);

const PORT = config.PORT;
const HOST = config.HOST;

app.listen(PORT,HOST,  () => {
  console.log(`Server started on ${HOST}:${PORT}`);
});
