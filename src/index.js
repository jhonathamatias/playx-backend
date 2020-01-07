const express = require('express');
const bodyParser = require('body-parser');
const { port } = require('./config');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers')(app);
app.listen(port);