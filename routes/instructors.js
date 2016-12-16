'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/instructors', (req, res, next) =>{
  knex('instructors')
  .then((instructors) => {
    res.send(instructors);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
