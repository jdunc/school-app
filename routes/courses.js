'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/courses', (req, res, next) =>{
  knex('courses')
  .then((courses) => {
    res.send(courses);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
