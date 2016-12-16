'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/students', (req, res, next) =>{
  knex('students')
  .then((students) => {
    res.send(students);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
