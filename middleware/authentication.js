const jwt = require('jsonwebtoken');
const { response } = require('../routers/routes');

const verify = (req, response, next) => {

    let token = req.get('Authorization');

    switch (token) {
        case 'AuthGoogle':
            next()
            break;
        case 'AuthFacebook':
            next()
            break;
        case 'AuthGithub':
            next()
            break;
        case 'AuthFirebase':
            next()
            break;
        default:
            jwt.verify(token, 'skey', (err, data) => {
                if (err) {
                    return response.status(400).json({
                        ok: false,
                        err
                    });
                }

                req.user = data.user;
                next()                  //habilita el seguimiento del middleware
            });
            break;

    }
}

module.exports = {
    verify
}