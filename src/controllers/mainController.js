const productos=require("../database/products");
const fs = require("fs");
const path = require("path");
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
    carrito: (req,res)=>{
        res.render("vistadecarrito");
    },
    editar: (req,res)=>{
        res.render("./products/editarproducto");
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
        res.render("./products/listadodeproductos", {producto:productos})
    },
    eliminar: (req,res)=>{
        //HAY QUE ELIMINAR EL PRODUCTO DE LA BASE DE DATOS PRODUCTS.JSON
        res.send(req.body);
    }
}

