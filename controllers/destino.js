const { destino } = require('../models/index')
const bcrypt = require('bcrypt');


const getAll = async(request, response) => {
    try{
        let destin = await destino.findAll();
        
        if (destin.length === 0){
            return response.json({
                ok: true,
                message: {
                    message: 'Vacio'
                }
            });
        }

        return response.json({
            ok: true,
            destin
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
        let destin = await destino.findByPk(id);

        if(!destin){
            return response.status(400).json({
                ok: false,
                message: 'destino no encontrado.'
            });
        }

        return response.json({
            ok: true,
            destin
        })

    }catch(err){
        return response.status(500).json({
            ok: false,
            err
        });
                
    }
}

const createdestino = async(request, response) => {
    try{
        let {nombre_destino} = request.body;

        let destin = await destino.create({
            nombre_destino
        });

        if(!destin){
            return response.status(200).json({
                ok: false,
                message: 'El destino no ha sido creado'
            });
        }

        return response.json({
            ok:true,
            destin
        });

    }catch(err){
        return response.status(500).json({
            ok: false,
            err
        });
                
    }
}

const updatedestino = async(request, response) => {

    try{
        let id = request.params.id;
        let { nombre_destino} = request.body;

        let body = {
            nombre_destino
        }

        let destin = await destino.update(body,{
            where:{
                id:id
            }
        });

        if(!destin){
            return response.status(400).json({
                ok: false,
                message: 'La destino no existe.'
            });
        }
        return response.json({
            ok:true,
            destin
        });

    }catch(err){
        return response.status(500).json({
            ok: false,
            err
        });
                    
    }
}

const deletedestino = async(request, response) => {

    try {
        let id = request.params.id;
        let destin = await destino.destroy({
            where:{
                id:id
            }
        });

        if(!destin){
            return response.status(400).json({
                ok: false,
                message: 'La destino no existe.'
            });
        }
        
        return response.json({
            ok:true,
            destin
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
    createdestino,
    updatedestino,
    deletedestino
}