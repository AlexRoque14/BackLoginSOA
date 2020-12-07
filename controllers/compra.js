const { compra } = require('../models/index')
const bcrypt = require('bcrypt');


const getAll = async(request, response) => {
    try{
        let com = await compra.findAll();
        
        if (com.length === 0){
            return response.json({
                ok: true,
                message: {
                    message: 'Vacio'
                }
            });
        }

        return response.json({
            com
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
        let comp = await compra.findByPk(id);

        if(!comp){
            return response.status(400).json({
                ok: false,
                message: 'Compra no encontrado.'
            });
        }

        return response.json({
            comp
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

        let com = await compra.create({
            id_usuario,
            id_vuelo,
            status
        });

        if(!com){
            return response.status(200).json({
                ok: false,
                message: 'La compra no ha sido creado'
            });
        }

        return response.json({
            ok:true,
            com
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

        let com = await compra.update(body,{
            where:{
                id_usuario:id
            }
        });

        if(!com){
            return response.status(400).json({
                ok: false,
                message: 'La compra no existe.'
            });
        }
        return response.json({
            ok:true,
            com
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
        let com = await compra.destroy({
            where:{
                id:id
            }
        });

        if(!com){
            return response.status(400).json({
                ok: false,
                message: 'La compra no existe.'
            });
        }
        
        return response.json({
            ok:true,
            com
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