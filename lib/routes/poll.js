const { Router } = require('express');
const Poll = require('../lib/models/Poll');

module.exports = Router()
  .post('/', (req, res, next) => {
    Poll
      .create(req.body)
      .then(poll => res.send(poll))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Poll
      .find(req.query)
      .select({
        name: true
      })
      .then(poll => res.send(poll))
      .catch(next);
  });
