const express = require('express');
const CandidateController = require('./src/controllers/CandidateController');
const routes = new express.Router();

//define rota
routes.post('/register', CandidateController.register);

module.exports = routes;