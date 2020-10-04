const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;
const data = require('./models/index');
const cors = require('cors');


//permisos
app.use(cors());

//Rutas
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require('./routers/routes'));

//Servidor 
app.listen(PORT, ()=>{
    console.log('Server listen in port: ' + PORT);

    data.sequelize.authenticate().then(() => {
        console.log('Connected in data base');
    });
})