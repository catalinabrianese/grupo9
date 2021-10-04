
module.exports= function(req,res, next){
    if(req.session.usuarioLogueado){
        next();
    }else{
        res.redirect("/user/login")
    }
}