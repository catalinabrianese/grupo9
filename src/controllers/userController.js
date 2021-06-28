const { response } = require("express")

module.exports={
    guardarUsuario: (req,res)=>{
        let usuario={
            nombre: req.body.Nombre,
            apellido: req.body.Apellido,
            masculino: req.body.masculino,
            femenino: req.body.femenino,
            //SE PODRÁ GUARDAR SÓLO LA OPCIÓN SELECCIONADA? MASCULINO O FEMENINO
            email: req.body.Email,
            contraseña: req.body.Contraseña,
            //NO SE COMO GUARDAR FECHA DE NACIMIENTO Y PAIS DE NACIMIENTO

            domicilio: req.body.Domicilio,
        }
        //GUARDAR USUARIO
        res.redirect("index");
    },
    perfilUsuario: (req,res)=>{
        res.render("./users/perfil");
    }

}