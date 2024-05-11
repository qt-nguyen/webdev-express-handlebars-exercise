const express = require('express');
const route = express.Router();
const controller = require("../controllers/controller");  

route.get('/', controller.task4);
route.get('/:name', controller.task4Details);

module.exports = route;