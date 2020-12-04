const ruta= require('express').Router();
const {getAll, getById, createorigen, updateorigen, deleteorigen } = require('../controllers/origen');


 ruta.get('/', getAll);             //traer todos
 ruta.get('/:id', getById);         //traer por id
 ruta.post('/', createorigen);        //crear usuarios
 ruta.put('/:id', updateorigen);      //actualizar usuarios
 ruta.delete('/:id', deleteorigen);   //eliminar usuarios

 module.exports = ruta;