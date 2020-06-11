const { Router } = require('express');
const Organization = require('../models/Organization');

module.exports = Router()
  .post('/', (req, res, next) => {
    Organization
      .create(req.body)
      .then(orientation => res.send(orientation))
      .catch(next);    
  })

  .get('/', (req, res, next) => {
    Organization
      .find()
      .then(organization => res.send(organization))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Organization
      .findById(req.params.id)
      .then(organization => res.send(organization))
      .catch(next);
  });
