const productos=require("../database/products");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const productoFilePath=path.join(__dirname, '../database/products.json');
const product = JSON.parse(fs.readFileSync(productoFilePath, 'utf-8'));

module.exports={
    index: (req,res)=>{
        res.render("index", {products: productos});

    },
    register: (req,res)=>{
        res.render('./users/vistaderegistro');
    },
    detailproducts:(req,res)=>{
        let producto = null;
        for (let i=0; i<productos.length; i++) {
            if (productos[i].id == req.params.id){
                producto = productos[i]
            } 
        }
        res.render("./products/vistadedetalledeproducto", {producto: producto});
    },
    login:(req,res)=>{
        res.render("./users/vistadelogin");
    },
    processLogin: function(req,res){
        let errors=validationResult(req);
        if(errors.isEmpty()){
            let userJSON= fs.readFileSync("users.json",{errors: errors.errors});
            let users;
            if(usersJSON=""){
                users=[];
            }else{
                users=JSON.parse(usersJSON);
            }
            for(let i=0; i <users.length;i++){
                if(users[i].user_email == req.body.user_email){
                    if(bcrypt.compareSync(req.body.pass, users[i].pass)){
                        let usuarioALoguearse=users[i];
                        break;
                    }
                }
            }
            if(usuarioALoguearse == undefined){
                return res.render("login",{errors:[
                    {msg: "Credenciales inválidas"}
                ]});
            }

            req.session.usuarioLogueado=usuarioALoguearse;
        }else{
            return res.render("login", {errors: errors.errors})
        }
        
    },
    carrito: (req,res)=>{
        res.render("vistadecarrito");
    },
    editar: (req,res)=>{
        let producto = null;
        for (let i=0; i<productos.length; i++) {
            if (productos[i].id == req.params.id){
                producto = productos[i]
            } 
        }
        
        res.render("./products/editarproducto", {producto: producto});

    },
    crear: (req,res)=>{
        res.render("./products/crearproducto");
    },
    guardar: (req,res)=>{
            let nombreImagen=req.file.filename;
            let idNuevo = productos[productos.length-1].id + 1;
            let nuevoObjeto =  Object.assign({id: idNuevo},req.body,{imagen:nombreImagen});
            productos.push(nuevoObjeto);
            fs.writeFileSync(productoFilePath, JSON.stringify(productos,null, ' '));
            res.redirect('/productos');
        },
    products: (req,res)=>{
        res.render("./products/listadodeproductos", {productos:productos})
    },
    eliminar: (req,res)=>{
        //ELIMINA EL PRODUCTO DE LA BASE DE DATOS PRODUCTS.JSON
        let idProducto=req.params.id;
        for(let i=0;i<productos.length; i++){
            if (productos[i].id == idProducto){
                productos.splice(i,1);
                break;
            }
        }
        fs.writeFileSync(productoFilePath, JSON.stringify(productos,null, ' '));
        res.render("../views/products/listadodeproductos", {productos:productos});
        
    },
    actualizar: (req,res)=>{
        let valoresNuevos= req.body;
        let idProducto= req.params.id;
        let productoEditado= null;
        for (let i=0;i<productos.length;i++){
            if(productos[i].id == idProducto){
                productos[i].nombre=valoresNuevos.nombre;
                productos[i].precio=valoresNuevos.precio;
                productos[i].descuento=valoresNuevos.descuento;
                productos[i].categoria=valoresNuevos.categoria;
                productos[i].descripcion=valoresNuevos.descripcion;
                
                productoEditado= productos[i];
                break;
            }
        }
        fs.writeFileSync(productoFilePath, JSON.stringify(productos,null, " "));
        res.render("./products/vistadedetalledeproducto",{producto: productoEditado});
    }
}

