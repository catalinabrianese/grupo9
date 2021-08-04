const { response } = require("express");
const fs = require("fs");
const path = require("path");
const usuarioFilePath=path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usuarioFilePath, 'utf-8'));
const usuarios=require("../database/users.json");
const {validationResult, check} = require('express-validator');
const bcrypt = require('bcryptjs');



module.exports={
    guardarUsuario: (req,res)=>{
        let errors = validationResult(req);
        if (errors.isEmpty()) {
         let nuevoId=usuarios[usuarios.length-1].id +1;
         let passEncriptada = bcrypt.hashSync(req.body.pass, 10);
         let passConfirmationEncriptada = bcrypt.hashSync(req.body.pass_confirmation, 10);
         let nuevoUsuario= Object.assign({id: nuevoId},req.body);
         nuevoUsuario.pass = passEncriptada;
         nuevoUsuario.pass_confirmation = passConfirmationEncriptada;
         usuarios.push(nuevoUsuario);
         fs.writeFileSync(usuarioFilePath, JSON.stringify(usuarios,null, ' '));
         res.redirect("/user/login");
       
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
            if (usuarios[i].id == req.session.usuarioLogueado){
                usuario = usuarios[i]
            } 
        }
        res.render("./users/perfil",{usuario: usuario});
        
    },
    login:(req,res)=>{
        res.render("./users/vistadelogin");
    },
    processLogin: function(req,res){
        let errors=validationResult(req);
        if(errors.isEmpty()){
            for(let i=0; i <users.length;i++){
                if(users[i].user_email == req.body.user_email){
                    if(bcrypt.compareSync(req.body.pass, users[i].pass)){
                        req.session.usuarioLogueado=users[i].id;
                        res.redirect("/user/perfil");
                        break;
                    }
                }
            }
            /*if(usuarioALoguearse == undefined){
                return res.render("users/vistadelogin",{errors:[
                    {msg: "Credenciales inválidas"}
                ]});
            }*/

        }else{
           res.render("./users/vistadelogin",{ 
                errors: errors.array(),
                old: req.body 
            
            });
        }
        
    },
    register:(req,res)=>{
        res.render("./users/vistaderegistro");
    },
    editarperfil:(req,res)=>{
        res.render("./users/userEdit");
    },

    guardarFotoPerfil: (req,res)=>{
        let nombreImagen=req.file.filename;
        let agregarUsuario =  Object.assign({imagen:nombreImagen});
        productos.push(agregarUsuario);
        fs.writeFileSync(productoFilePath, JSON.stringify(productos,null, ' '));
        res.redirect('/p');
    }, 

}