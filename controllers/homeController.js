const path = require("path");

const controlador = {
    index: (req,res)=>{
        res.render("index")
    },
    inicio: (req, res)=>{
        res.render("inicio")
    }
}

module.exports = controlador;