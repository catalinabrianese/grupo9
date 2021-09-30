/*const productos = require("../data/products");*/
/*const fs = require("fs");
const path = require("path");
*/const { validationResult } = require("express-validator");
/*const productoFilePath=path.join(__dirname, '../data/products.json');
const product = JSON.parse(fs.readFileSync(productoFilePath, 'utf-8'));
const usuarioFilePath=path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usuarioFilePath, 'utf-8'));
const usuarios=require("../data/users.json");*/
const db = require('../database/models');

module.exports={
    index: (req,res)=>{
        /*console.log(db.Products)*/
         db.Productos.findAll()
            .then(function(productos){
                res.render("index", {products: productos, usuarioLogueado: req.session.usuarioLogueado})
            })
    },
    register: (req,res)=>{
        res.render('./users/vistaderegistro', {usuarioLogueado: req.session.usuarioLogueado});
    },
    detailproducts:(req,res)=>{
        db.Productos.findByPk(req.params.id)
            .then(function(productos){
                res.render("./products/vistadedetalledeproducto",  {producto: productos, usuarioLogueado: req.session.usuarioLogueado});
            });

            /*let producto = null;
            for (let i=0; i<productos.length; i++) {
                if (productos[i].id == req.params.id){
                    producto = productos[i]
                } 
            }
            res.render("./products/vistadedetalledeproducto", {producto: producto});*/
    },
    carrito: (req,res)=>{
        res.render("vistadecarrito");
    },
    editar: (req,res)=>{
        db.Productos.findByPk(req.params.id)
            .then(function(producto){
                res.render("./products/crearproducto",{producto:producto, usuarioLogueado: req.session.usuarioLogueado})
            })

        /*let producto = null;
        for (let i=0; i<productos.length; i++) {
            if (productos[i].id == req.params.id){
                producto = productos[i]
            } 
        }
        
        res.render("./products/editarproducto", {producto: producto});*/

    },
    crear: (req,res)=>{
        res.render("./products/crearproducto");
    },
    guardar: (req,res)=>{

        db.Productos.create({
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            descuento: req.body.descuento,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            tamano: req.body.tamano,
        });
        res.redirect("/detalledeproducto", {usuarioLogueado: req.session.usuarioLogueado});
        /*
            let nombreImagen=req.file.filename;
            let idNuevo = productos[productos.length-1].id + 1;
            let nuevoObjeto =  Object.assign({id: idNuevo},req.body,{imagen:nombreImagen});
            productos.push(nuevoObjeto);
            fs.writeFileSync(productoFilePath, JSON.stringify(productos,null, ' '));
            res.redirect('/productos');*/
    },

    products: (req,res)=>{
        db.Productos.findAll()
            .then(function(productos){
                res.render("./products/listadodeproductos", {productos:productos, usuarioLogueado: req.session.usuarioLogueado})
            })
    },
    eliminar: (req,res)=>{

        db.Productos.destroy({
            where:{
                id:req.params.id
            }
        })
        /*
        let idProducto=req.params.id;
        for(let i=0;i<productos.length; i++){
            if (productos[i].id == idProducto){
                productos.splice(i,1);
                break;
            }
        }
        fs.writeFileSync(productoFilePath, JSON.stringify(productos,null, ' '));
        res.render("../views/products/listadodeproductos", {productos:productos});*/
        
    },
    actualizar: (req,res)=>{
        db.Productos.update({
            imagen:req.body.imagen,
            nombre: req.body.user_surname,
            descuento: req.body.user_gender,
            descripcion: req.body.user_email,
            precio: req.body.pass,
            tamano: req.body.user_birth,
        }),{
            where: {
                id:req.params.id
            }
        }
        res.redirect("/editar/" + req.params.id);

        /*let valoresNuevos= req.body;
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
        res.render("./products/vistadedetalledeproducto",{producto: productoEditado});*/
    },
    api:(req,res)=>{
        db.Productos.findAll()
        .then(function(productos){
            res.json({data:productos})
        });
    }

}

