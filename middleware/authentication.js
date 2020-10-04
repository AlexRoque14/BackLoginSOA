const jwt = require ('jsonwebtoken');
const { response } = require('../routers/routes');

const verify = (req , response, next )=>{

    let token = req.get('Authorization');

    jwt.verify(token,'skey',(err, data) => {
            if(err){
                return response.status(400).json({
                    ok: false,
                    err
                });
            }

            req.user = data.user;
            next()                  //habilita el seguimiento del middleware
        });
}

module.exports = {
    verify
}