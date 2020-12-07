const { Vuelo } = require('../models/index')


const getAll = async (request, response) => {
    console.log(request.vuelo)
    try {
        let vuelos = await Vuelo.findAll();

        if (vuelos.length === 0) {
            return response.json({
                ok: true,
                message: {
                    message: 'Vacio'
                }
            });
        }

        return response.json({
            ok: true,
            vuelos
        });

    } catch (err) {
        return response.status(500).json({
            ok: false,
            err
        });

    }
}


const getById = async (request, response) => {
    try {
        let id = request.params.id;
        let vuelo = await Vuelo.findByPk(id);

        if (!vuelo) {
            return response.status(400).json({
                ok: false,
                message: 'Vuelo no encontrado.'
            });
        }

        return response.json({
            ok: true,
            vuelo
        })

    } catch (err) {
        return response.status(500).json({
            ok: false,
            err
        });

    }
}

const createVuelo = async (request, response) => {
    try {
        let { origen, destino, id_origen, id_destino, operador, clase, sala, hora_fecha,
            precio_basica, precio_clasica, precio_confort, precio_plus, precio_premiere
        } = request.body;

        let vuelo = await Vuelo.create({
            origen,
            destino,
            id_origen,
            id_destino,
            operador,
            clase,
            sala,
            hora_fecha, 
            precio_basica, 
            precio_clasica, 
            precio_confort, 
            precio_plus, 
            precio_premiere
        });

        if (!vuelo) {
            return response.status(200).json({
                ok: false,
                message: 'El vuelo no ha sido creado'
            });
        }

        return response.json({
            ok: true,
            vuelo
        });

    } catch (err) {
        return response.status(500).json({
            ok: false,
            err
        });

    }
}

const updateVuelo = async (request, response) => {

    try {
        let id = request.params.id;
        let { origen, destino, id_origen, id_destino, operador, clase, sala, hora_fecha } = request.body;

        let body = {
            origen,
            destino,
            id_origen,
            id_destino,
            operador,
            clase,
            sala,
            hora_fecha
        }

        let vuelo = await Vuelo.update(body, {
            where: {
                id: id
            }
        });

        if (!vuelo) {
            return response.status(400).json({
                ok: false,
                message: 'El usuario no existe.'
            });
        }
        return response.json({
            ok: true,
            vuelo
        });

    } catch (err) {
        return response.status(500).json({
            ok: false,
            err
        });

    }
}

const deleteVuelo = async (request, response) => {

    try {
        let id = request.params.id;
        let vuelo = await Vuelo.destroy({
            where: {
                id: id
            }
        });

        if (!vuelo) {
            return response.status(400).json({
                ok: false,
                message: 'El vuelo no existe.'
            });
        }

        return response.json({
            ok: true,
            vuelo
        });


    } catch (error) {
        return response.status(500).json({
            ok: false,
            err
        });
    }
}

module.exports = {
    getAll,
    getById,
    createVuelo,
    updateVuelo,
    deleteVuelo

}