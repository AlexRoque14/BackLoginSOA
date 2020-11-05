const route = require('express').Router();
const {createLog, getById, updateLog, getAll} = require('../controllers/Log');

route.post('/', createLog)
route.get('/:id', getById)
route.put('/:id', updateLog)
route.get('/', getAll)

module.exports = route;