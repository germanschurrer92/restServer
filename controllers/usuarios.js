const { response, request } = require("express");


const usuariosGet = (req = request, res = response) => {
    const params = req.query;
    
    res.json({
        msg:"Llamamos el GET",
        params

    });
}

const usuariosPost = (req, res = response) => {
    const body = req.body;
        
    
    res.json({
        body
    });
}
const usuariosPut = (req, res = response) => {
    
    const id = req.params.id;
    
    res.json({
        msg:"Mandaste el ID: " + id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg:"Llamamos el Delete"
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg:"Llamamos el PATCH"
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
};