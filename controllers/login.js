const { response } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { User } = require('../models/index');



const login = async(request, response) =>{

    try {
        let {email, password } = request.body;
        console.log(request.body);

        let user = await User.findOne({
            where: {
                email:email
            },
        });
    
        if(!user){
            return response.status(400).json({
                ok: false,
                message: 'El usuario no existe'
            });
        }
    
        if(!(bcrypt.compareSync(password , user.password))){
            return response.status(400).json({
                ok: false,
                message: 'Contraseña no valida'
            });
        }
    
        let token = jwt.sign({user},'skey',{expiresIn: '1h'})
        
        return response.json({
            ok:true,
            token,
            user
        });

    } catch (error) {
        return response.status(500).json({
            ok: false,
            error
        });
                
    }
}


module.exports = {
    login
}