
module.exports= function(req,res, next){
    if(req.session.usuarioAdmin == 1){
        next();
    }else{
        res.send("Esta página es sólo para Administradores");
    }
}