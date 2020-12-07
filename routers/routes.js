const express = require('express');
const { verify } = require('../middleware/authentication'); 
const { createUser } = require('../controllers/user') //para registrar usuarios.
const { emailRegistro } = require('../controllers/email')
const { open } = require('../controllers/openpay');

const app = express();

//inicio sesión
app.use('/login', require('./login'));     //desde login.js

//registrar usuario
app.post('/register', createUser)

//rutas para usuario.
app.use('/user' , [verify] , require('./user'));

//archivos logs
app.use('/logs', require('./log'));         //desde log.js

//rutas vuelos
app.use('/vuelos',require('./vuelo'));     //desde vuelos.

//enviar email inicio de sesion
app.use('/email', require('./email'));

//enviar email para registro
app.use('/email_registro', emailRegistro)

//enviar email para confirmación de compra


//comprar
app.use('/compra', [verify], require('./compra'));


//origen
app.use('/origen', require('./origen'));

//destino
app.use('/destino', require('./destino'));



//paypal esto es nuevo 05/12/2020
app.use('/pagar', [verify] , open)



//test
app.get('/test_deploy', (request , response)=>{
    response.json({
        ok: true, 
        message: "Deploy"})
})

module.exports = app;