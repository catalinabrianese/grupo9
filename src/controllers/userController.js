const { response } = require("express");
const fs = require("fs");
const path = require("path");
const usuarioFilePath=path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usuarioFilePath, 'utf-8'));
/*const usuarios=require("../data/users.json");*/
const {validationResult, check} = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');



module.exports={
    guardarUsuario: (req,res)=>{
        let errors = validationResult(req);
        /*db.Usuarios.findOne({
            where: {
            user_email: req.body.user_email
            }
        })
        .then(function(usuario){*/
        if (errors.isEmpty() /*&& usuario==undefined*/) {
            let p = bcrypt.hashSync(req.body.pass, 10)
            db.Usuarios.create({
                user_name:req.body.user_name,
                user_surname: req.body.user_surname,
                user_gender: req.body.user_gender,
                user_email: req.body.user_email,
                pass: p,
                user_birth: req.body.user_birth,
                pais: req.body.pais,
                user_address: req.body.user_address,
                rol: 0,
            });
            res.redirect("/");
        }else{
            res.render("./users/vistaderegistro",{ 
                errors: errors.array(),
                old: req.body 
            
            });
        }
        /*});*/
       
        /*
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
        }*/
       
    },
    perfilUsuario: (req,res)=>{
        /*let usuario = null;
        for (let i=0; i<usuarios.length; i++) {
            if (usuarios[i].id == req.session.usuarioLogueado){
                usuario = usuarios[i]
            } 
        } */
        //let usuario1 = req.session.usuarioLogueado;
        
        res.render("../views/users/perfil", {usuario: req.session.usuarioLogueado});
        
    },
    login:(req,res)=>{
        res.render("./users/vistadelogin", {errors: undefined, usuarioLogueado: undefined});
    },
    processLogin: function(req,res){
        let errors=validationResult(req);
        if(errors.isEmpty()){
            db.Usuarios.findOne({
            where: {
            user_email: req.body.user_email
            }
                })
            .then(function(usuario){
            
            
            if (usuario != null) {

            let userlog = {
                id : usuario.id,
                user_name: usuario.user_name,
                user_surname: usuario.user_surname,
                user_email: usuario.user_email,
                user_birth: usuario.user_birth,
                user_addres: usuario.user_address
            }
        
            if(bcrypt.compareSync(req.body.pass, usuario.pass)){
                req.session.usuarioLogueado= userlog
            
                res.render("../views/users/perfil", {usuario: userlog})
            }
                    
        }else { 
            res.render("./users/vistadelogin",{ 
                errors: errors.array(),
                old: req.body 
            
            });
            }})
        }
    
           
    
     

     /*    let errors=validationResult(req);
        if(errors.isEmpty()){
            for(let i=0; i <users.length;i++){
                if(users[i].user_email == req.body.user_email){
                    if(bcrypt.compareSync(req.body.pass, users[i].pass)){
                        req.session.usuarioLogueado=users[i].id;
                        if (req.body.recordame != undefined) {
                            res.cookie("recordame", req.session.usuarioLogueado.user_email, { maxAge: 60000 })
                            res.render("Success!")
                        }
                        res.redirect("/user/perfil");
                        break;
                    }
                }
            } */
            /*if(usuarioALoguearse == undefined){
                return res.render("users/vistadelogin",{errors:[
                    {msg: "Credenciales inválidas"}
                ]});
            }*/

        /* }else{
           res.render("./users/vistadelogin",{ 
                errors: errors.array(),
                old: req.body 
            
            });
        }
        */
    },

    logout: (req, res) => {
        //res.clearCookie('user_email');
        //req.session.destroy();
        req.session.usuarioLogueado = undefined;
        console.log('hola');
        return res.redirect('/');
    },

    register:(req,res)=>{
        res.render("./users/vistaderegistro", {usuarioLogueado: req.session.usuarioLogueado});
    },
    editarperfil:(req,res)=>{
        res.render("./users/userEdit");
    },

    guardarFotoPerfil: (req,res)=>{
        let usuario=null;
        let id=null;
        for (let i=0; i<usuarios.length; i++) {
            if (usuarios[i].id == req.session.usuarioLogueado){
                usuario=usuarios[i];
                id=usuarios[i].id;
            } 
        }
        let nombreImagen=req.file.filename;
        let agregarUsuario =  Object.assign({imagen:nombreImagen},usuario);
        usuarios[id].push(agregarUsuario);
        fs.writeFileSync(req.destination, JSON.stringify(usuarios,null, ' '));
        res.redirect('/perfil');
    }

}