const ruta = require('express').Router();
const {getAll, getById, createUser, updateUser, deleteUser } = require('../controllers/user');

 ruta.get('/', getAll);             //traer todos
 ruta.get('/:id', getById);         //traer por id
 ruta.post('/', createUser);        //crear usuarios
 ruta.put('/:id', updateUser);      //actualizar usuarios
 ruta.delete('/:id', deleteUser);   //eliminar usuarios

 module.exports = ruta;