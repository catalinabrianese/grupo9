const { response } = require("express");
const fs = require("fs");
const path = require("path");
const usuarioFilePath=path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usuarioFilePath, 'utf-8'));
const usuarios=require("../database/users.json");
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');



module.exports={
    guardarUsuario: (req,res)=>{
        let errors = validationResult(req);
        if (errors.isEmpty()) {
         let usuarioNuevo={
            user_name:req.body.user_name,
            user_surname: req.body.user_surname,
            user_email: req.body.user_email,
            pass: req.body.pass,
            user_birth: req.body.user_birth,
            pais: req.body.pais,
            user_address: req.body.user_address,
            TyC: req.user.TyC
         }
         let nuevoId=usuarios[usuarios.length-1].id +1;
         let passEncriptada = bcrypt.hashSync(req.body.pass, 10);
         let nuevoUsuario= Object.assign({id: nuevoId},req.body);
         nuevoUsuario.pass = passEncriptada;
         usuarios.push(nuevoUsuario);
         fs.writeFileSync(usuarioFilePath, JSON.stringify(usuarios,null, ' '));
         res.redirect("/login");
       
        } else {
            res.render("./users/vistaderegistro",{ 
                errors: errors.array(),
                old: req.body 
            
            });
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