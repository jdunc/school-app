'use strict';

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const morgan = require('morgan');
const bodyParser = require('body-parser');

const students = require('./routes/students');
const instructors = require('./routes/instructors');
const courses = require('./routes/courses');

const app = express();

app.use(bodyParser.json());

app.use(students);
app.use(instructors);
app.use(courses);

app.use((_req, res, _next) => {
  res.sendStatus(404);
});

app.use((err, _req, res, _next) => {
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.message)
  }
  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});
module.exports = app;
