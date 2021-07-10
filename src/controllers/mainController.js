const productos=require("../database/products");

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
           // let nombreImagen=req.file.filename;
            //let idNuevo = products[products.length-1].id + 1;
            //let nuevoObjeto =  Object.assign({id: idNuevo},req.body,{image:nombreImagen});
            //products.push(nuevoObjeto);
            // fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));
            res.send(req.body);
            //res.redirect('/');
        },
    products: (req,res)=>{
        res.render("./products/listadodeproductos", {productos:productos})
    },
    eliminar: (req,res)=>{
        //HAY QUE ELIMINAR EL PRODUCTO DE LA BASE DE DATOS PRODUCTS.JSON
        res.send(req.body);
    }
}

