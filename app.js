require('dotenv').config();
const express = require('express');
const cors = require('cors');

const highlightRouter = require('./routes/highlight');

const app = express();

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
