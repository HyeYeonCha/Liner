require('dotenv').config();
const express = require('express');
const cors = require('cors');

const highlightRouter = require('./controllers/highlight');

const connect = require('./models');

const app = express();
connect();

app.set('port', process.env.PORT || 5000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  })
);

app.get('/', (req, res) => res.status(200).end());
app.use('/highlight', highlightRouter);

app.listen(app.get('port'));
