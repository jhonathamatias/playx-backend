const express = require('express');
const bodyParser = require('body-parser');
const { port } = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers')(app);
app.listen(port);