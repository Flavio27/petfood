const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('./src/config/database');

const app = express();

app.set('port', process.env.PORT || 8000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/', require('./src/routes/main.routes'));

app.listen(app.get('port'));
