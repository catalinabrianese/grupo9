const { response } = require("express");
const fs = require("fs");
const path = require("path");
const usuarioFilePath=path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usuarioFilePath, 'utf-8'));
const usuarios=require("../database/users.json");
const {validationResult} = require('express-validator');


module.exports={
    guardarUsuario: (req,res)=>{
        let errors = validationResult(req);
        if (errors.isEmpty()) {
         let nuevoId=usuarios[usuarios.length-1].id +1;
         let nuevoUsuario= Object.assign({id: nuevoId},req.body);
         usuarios.push(nuevoUsuario);
         fs.writeFileSync(usuarioFilePath, JSON.stringify(usuarios,null, ' '));
         res.redirect("/login");
       
        } else {
            res.render("./users/vistaderegistro", { errors: errors.array() });
        }
       
    },
    perfilUsuario: (req,res)=>{
        let usuario = null;
        for (let i=0; i<usuarios.length; i++) {
            if (usuarios[i].id == req.params.id){
                usuario = usuarios[i]
            } 
        }
        res.render("./users/perfil",{usuario: usuario});
        
    },
    login:(req,res)=>{
        res.render("./users/vistadelogin");
    },
    register:(req,res)=>{
        res.render("./users/vistaderegistro");
    },
    editarperfil:(req,res)=>{
        res.render("./users/userEdit");
    }

}