module.exports={
    index: (req,res)=>{
        res.render("index");
    },
    register: (req,res)=>{
        res.render("./users/vistaderegistro");
    },
    products:(req,res)=>{
        res.render("./products/vistadedetalledeproducto");
    },
    login:(req,res)=>{
        res.render("./users/vistadelogin");
    },
    carrito: (req,res)=>{
        res.render("vistadecarrito");
    }
}