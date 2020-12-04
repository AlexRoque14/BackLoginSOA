const ruta = require('express').Router();
const {getAll, getById, createdestino, updatedestino, deletedestino } = require('../controllers/destino');

 ruta.get('/', getAll);             //traer todos
 ruta.get('/:id', getById);         //traer por id
 ruta.post('/', createdestino);        //crear usuarios
 ruta.put('/:id', updatedestino);      //actualizar usuarios
 ruta.delete('/:id', deletedestino);   //eliminar usuarios

 module.exports = ruta;