
module.exports= function(req,res, next){
    if(req.session.usuarioAdmin != undefined){
        next();
    }else{
        res.send("Esta página es sólo para Administradores");
    }
}