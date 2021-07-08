const productos=require("../database/products");

module.exports={
    index: (req,res)=>{
        res.render("index", {products: productos});

    },
    register: (req,res)=>{
        
    },
    products:(req,res)=>{
        res.render("./products/vistadedetalledeproducto", {products: productos});
    },
    login:(req,res)=>{
        res.render("./users/vistadelogin");
    },
    carrito: (req,res)=>{
        res.render("vistadecarrito");
    }
}