const ruta = require('express').Router();
const {getAll, getById, createVuelo, updateVuelo, deleteVuelo } = require('../controllers/vuelo');

 ruta.get('/', getAll);             //traer todos
 ruta.get('/:id', getById);         //traer por id
 ruta.post('/', createVuelo);        //crear usuarios
 ruta.put('/:id', updateVuelo);      //actualizar usuarios
 ruta.delete('/:id', deleteVuelo);   //eliminar usuarios

 module.exports = ruta;