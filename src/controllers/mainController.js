module.exports={
    index: (req,res)=>{
        res.render("index");
    },
    register: (req,res)=>{
        res.render("vistaderegistro");
    },
    products:(req,res)=>{
        res.render("vistadedetalledeproducto");
    },
    login:(req,res)=>{
        res.render("vistadelogin")
    },
    carrito: (req,res)=>{
        res.render("vistadecarrito");
    }
}