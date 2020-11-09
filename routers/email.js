const route = require('express').Router();
const { email } = require('../controllers/email');

route.post('/', email );//envio de correo electronico



module.exports = route;