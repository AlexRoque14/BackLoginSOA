const ruta = require('express').Router();
const {getAll, getById, createcompra, updatecompra, deletecompra } = require('../controllers/compra');

ruta.get('/', getAll);             //traer todos
ruta.get('/:id', getById);         //traer por id
ruta.post('/', createcompra);        //crear compra
ruta.put('/:id', updatecompra);      //actualizar compra
ruta.delete('/:id', deletecompra);   //eliminar compra

 module.exports = ruta;