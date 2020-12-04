const { origen } = require('../models/index')
const bcrypt = require('bcrypt');


const getAll = async(request, response) => {
    try{
        let ori = await origen.findAll();
        
        if (ori.length === 0){
            return response.json({
                ok: true,
                message: {
                    message: 'Vacio'
                }
            });
        }

        return response.json({
            ok: true,
            ori
        });

    }catch(err){
        return response.status(500).json({
            ok: false,
            err
        });
        
    }
}


const getById = async(request, response) => {
    try{
        let id = request.params.id;
        let ori = await origen.findByPk(id);

        if(!ori){
            return response.status(400).json({
                ok: false,
                message: 'origen no encontrado.'
            });
        }

        return response.json({
            ok: true,
            ori
        })

    }catch(err){
        return response.status(500).json({
            ok: false,
            err
        });
                
    }
}

const createorigen = async(request, response) => {
    try{
        let {nombre_origen} = request.body;

        let ori = await origen.create({
            nombre_origen
        });

        if(!ori){
            return response.status(200).json({
                ok: false,
                message: 'El origen no ha sido creado'
            });
        }

        return response.json({
            ok:true,
            ori
        });

    }catch(err){
        return response.status(500).json({
            ok: false,
            err
        });
                
    }
}

const updateorigen = async(request, response) => {

    try{
        let id = request.params.id;
        let { nombre_origen} = request.body;

        let body = {
            nombre_origen
        }

        let ori = await origen.update(body,{
            where:{
                id:id
            }
        });

        if(!ori){
            return response.status(400).json({
                ok: false,
                message: 'La origen no existe.'
            });
        }
        return response.json({
            ok:true,
            ori
        });

    }catch(err){
        return response.status(500).json({
            ok: false,
            err
        });
                    
    }
}

const deleteorigen = async(request, response) => {

    try {
        let id = request.params.id;
        let ori = await origen.destroy({
            where:{
                id:id
            }
        });

        if(!ori){
            return response.status(400).json({
                ok: false,
                message: 'La origen no existe.'
            });
        }
        
        return response.json({
            ok:true,
            ori
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
    createorigen,
    updateorigen,
    deleteorigen
}