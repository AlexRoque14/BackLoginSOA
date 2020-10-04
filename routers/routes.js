const express = require('express');
const { login } = require('../controllers/login');
const { verify } = require('../middleware/authentication');
const { createUser } = require('../controllers/user')

const app = express();

app.use('/user' , [verify] , require('./user'));

app.post('/login', login);                 //desde el controlador     
app.use('/login2', require('./login'));     //desde login.js

app.post('/register', createUser);


module.exports = app;