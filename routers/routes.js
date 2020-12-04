const express = require('express');
const { verify } = require('../middleware/authentication'); 
const { createUser } = require('../controllers/user') //para registrar usuarios.

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

//enviar email
app.use('/email', require('./email'));

//comprar
app.use('/compra', [verify], require('./compra'));

//origen
app.use('/origen', require('./origen'));

//destino
app.use('/destino', require('./destino'));

//test
app.get('/test_deploy', (request , response)=>{
    response.json({
        ok: true, 
        message: "Deploy"})
})

module.exports = app;