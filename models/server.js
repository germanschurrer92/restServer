const express = require('express');
const cors = require('cors');
const usuarios = require('../routes/usuarios')


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'
        // Middlewares
        this.middlewares();
        
        // uso de la data del bodi
        this.app.use(express.json());
        
        // rutas de mi aplicación
        this.routes();
    }

    middlewares(){

        this.app.use(cors());



        //directorio público
        this.app.use(express.static('public'))

    }

    routes(){
       
        this.app.use(this.usuariosPath, usuarios );

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Server corriendo en el puerto: " + this.port);
        });
        
    }
}




module.exports = Server;