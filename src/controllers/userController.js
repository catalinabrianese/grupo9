const { response } = require("express");
const fs = require("fs");
const path = require("path");
const usuarioFilePath=path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usuarioFilePath, 'utf-8'));
const usuarios=require("../database/users.json")


module.exports={
    guardarUsuario: (req,res)=>{
        /* let usuario={
            nombre: req.body.Nombre,
            apellido: req.body.Apellido,
            masculino: req.body.masculino,
            femenino: req.body.femenino,
            SE PODRÁ GUARDAR SÓLO LA OPCIÓN SELECCIONADA? MASCULINO O FEMENINO
            //email: req.body.Email,
            //contraseña: req.body.Contraseña,
            //NO SE COMO GUARDAR FECHA DE NACIMIENTO Y PAIS DE NACIMIENTO
            //domicilio: req.body.Domicilio,
        //} */
        //GUARDAR USUARIO
        let nuevoId=usuarios[usuarios.length-1].id +1;
        let nuevoUsuario= Object.assign({id: nuevoId},req.body);
        usuarios.push(nuevoUsuario);
        fs.writeFileSync(usuarioFilePath, JSON.stringify(usuarios,null, ' '));
        res.redirect("/login");
    },
    perfilUsuario: (req,res)=>{
        res.render("./users/perfil");
        
    },
    login:(req,res)=>{
        res.render("./users/vistadelogin");
    },
    register:(req,res)=>{
        res.render("./users/vistaderegistro");
    }

}