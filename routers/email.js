const route = require('express').Router();
const { email , emailRegistro} = require('../controllers/email');

route.post('/', email );//envio de correo electronico



module.exports = route;