const { User } = require('../models/index')
const bcrypt = require('bcrypt');


const getAll = async(request, response) => {
    console.log(request.user)
    try{
        let users = await User.findAll();
        
        if (users.length === 0){
            return response.json({
                ok: true,
                message: {
                    message: 'Vacio'
                }
            });
        }

        return response.json({
            ok: true,
            users
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
        let user = await User.findByPk(id);

        if(!user){
            return response.status(400).json({
                ok: false,
                message: 'Usuario no encontrado.'
            });
        }

        return response.json({
            ok: true,
            user
        })

    }catch(err){
        return response.status(500).json({
            ok: false,
            err
        });
                
    }
}

const createUser = async(request, response) => {
    try{
        let { nombre, apellido, email , password, confirmPassword, roll} = request.body;

        let user = await User.create({
            nombre,
            apellido,
            email,
            password: bcrypt.hashSync(password,15),
            confirmPassword: bcrypt.hashSync(password,15), 
            roll
        });

        if(!user){
            return response.status(200).json({
                ok: false,
                message: 'El usuario no ha sido creado'
            });
        }

        return response.json({
            ok:true,
            user
        });

    }catch(err){
        return response.status(500).json({
            ok: false,
            err
        });
                
    }
}

const updateUser = async(request, response) => {

    try{
        let id = request.params.id;
        let { nombre, apellido, email , password, confirmPassword, rol} = request.body;

        let body = {
            nombre , 
            apellido, 
            email, 
            password: bcrypt.hashSync(password, 15 ),
            confirmPassword: bcrypt.hashSync(password, 15),
            rol
        }

        let user = await User.update(body,{
            where:{
                id:id
            }
        });

        if(!user){
            return response.status(400).json({
                ok: false,
                message: 'El usuario no existe.'
            });
        }
        return response.json({
            ok:true,
            user
        });

    }catch(err){
        return response.status(500).json({
            ok: false,
            err
        });
                    
    }
}

const deleteUser = async(request, response) => {

    try {
        let id = request.params.id;
        let user = await User.destroy({
            where:{
                id:id
            }
        });

        if(!user){
            return response.status(400).json({
                ok: false,
                message: 'El usuario no existe.'
            });
        }
        
        return response.json({
            ok:true,
            user
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
    createUser,
    updateUser,
    deleteUser
}