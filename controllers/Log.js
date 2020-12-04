const { Log } = require('../models/index');
const { request } = require('../routers/routes');

var fs = require('fs')

const getAll = async (request, response) => {
    console.log(request.log)
    try {
        let logs = await Log.findAll();


        if (logs.length === 0) {
            return response.json({
                ok: true,
                message: {
                    message: 'Vacio'
                }
            });
        }

        return response.json({
            ok: true,
            logs
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
        let id_log = request.params.id;
        let log = await Log.findByPk(id_log);

        if (!log) {
            return response.status(400).json({
                ok: false,
                message: 'Log no encontrado.'
            });
        }

        return response.json({
            ok: true,
            log
        })

    } catch (err) {
        return response.status(500).json({
            ok: false,
            err
        });

    }
}

const createLog = async (request, response) => {
    try {
        let { id_usuario, name_usuario, status, metodo_inicio, hora_fecha, roll, actividad} = request.body;

        
        if(roll == "2"){
            roll = "Administrador"
        }else{
            roll = "Usuario"
        }

        let log = await Log.create({
            id_usuario,
            name_usuario,
            status,
            metodo_inicio,
            hora_fecha,
            roll,
            actividad
        });

        if (!log) {
            return response.status(200).json({
                ok: false,
                message: 'El log no ha sido creado'
            });
        }

        // fs.stat("./logs/lauch_backup_user_" + id_usuario, function (err) {
        //     if (err == null) {

        //         fs.appendFile("./logs/lauch_backup_user_"+ id_usuario, 
        //         "-----------------------------------------\n"+
        //         "Id_usuario: " + id_usuario + "\n" +
        //         "Email: " + name_usuario + "\n" +
        //         "Status: " + status + "\n" + 
        //         "Metodo_inicio: " + metodo_inicio + "\n" +
        //         hora_fecha + "\n" +
        //         "Tipo de usuario: " + roll + "\n" +
        //         "-----------------------------------------\n", (err) => {
        //             if (err) throw err;
        //             console.log('Información agregada al archivo.!');
        //           });
        //     } else if (err.code == 'ENOENT') {
        //         console.log("el archivo no existe");
        //         fs.writeFile( "./logs/lauch_backup_user_"+ id_usuario, 
        //             "-----------------------------------------\n"+
        //             "Id_usuario: " + id_usuario + "\n" +
        //             "Email: " + name_usuario + "\n" +
        //             "Status: " + status + "\n" + 
        //             "Metodo_inicio: " + metodo_inicio + "\n" +
        //             hora_fecha + "\n" +
        //             "Tipo de usuario: " + roll + "\n" +
        //             "-----------------------------------------\n",
        //             function(err) {
        //             if (err) {
        //               return console.log(err);
        //             }
        //             console.log("El archivo fue creado correctamente");
        //           });
        //     } else {
        //         console.log(err); 
        //     }
        // })

        return response.json({
            ok: true,
            log
        });

    } catch (err) {
        return response.status(500).json({
            ok: false,
            err
        });

    }
}


const updateLog = async (request, response) => {

    try {
        let id_user = request.params.id;
        let { id_usuario, name_usuario, status, metodo_inicio, hora_fecha, actividad } = request.body;

        let body = {
            id_usuario,
            name_usuario,
            status,
            metodo_inicio,
            hora_fecha,
            actividad
        }

        let log = await Log.update(body, {
            where: {
                id_usuario: id_user
            }
        });

        if (!log) {
            return response.status(400).json({
                ok: false,
                message: 'El log no existe.'
            });
        }

        return response.json({
            ok: true,
            log
        });

    } catch (err) {
        return response.status(500).json({
            ok: false,
            err
        });

    }
}

module.exports = {
    getAll,
    getById,
    createLog,
    updateLog,

}