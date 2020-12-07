const { compra } = require('../models/index')
const bcrypt = require('bcrypt');


const getAll = async(request, response) => {
    try{
        let compra = await compra.findAll();
        
        if (compra.length === 0){
            return response.json({
                ok: true,
                message: {
                    message: 'Vacio'
                }
            });
        }

        return response.json({
            ok: true,
            compra
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
        let compra = await compra.findByPk(id);

        if(!compra){
            return response.status(400).json({
                ok: false,
                message: 'Compra no encontrado.'
            });
        }

        return response.json({
            ok: true,
            compra
        })

    }catch(err){
        return response.status(500).json({
            ok: false,
            err
        });
                
    }
}

const createcompra = async(request, response) => {
    try{
        let { id_usuario, id_vuelo, status} = request.body;

        let compra = await compra.create({
            id_usuario,
            id_vuelo,
            status
        });

        if(!compra){
            return response.status(200).json({
                ok: false,
                message: 'La compra no ha sido creado'
            });
        }

        return response.json({
            ok:true,
            compra
        });

    }catch(err){
        return response.status(500).json({
            ok: false,
            err
        });
                
    }
}

const updatecompra = async(request, response) => {

    try{
        let id = request.params.id_usuario;
        let {status} = request.body;

        let body = {
            status
        }

        let compra = await compra.update(body,{
            where:{
                id_usuario:id
            }
        });

        if(!compra){
            return response.status(400).json({
                ok: false,
                message: 'La compra no existe.'
            });
        }
        return response.json({
            ok:true,
            compra
        });

    }catch(err){
        return response.status(500).json({
            ok: false,
            err
        });
                    
    }
}

const deletecompra = async(request, response) => {

    try {
        let id = request.params.id;
        let compra = await compra.destroy({
            where:{
                id:id
            }
        });

        if(!compra){
            return response.status(400).json({
                ok: false,
                message: 'La compra no existe.'
            });
        }
        
        return response.json({
            ok:true,
            compra
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
    createcompra,
    updatecompra,
    deletecompra
}