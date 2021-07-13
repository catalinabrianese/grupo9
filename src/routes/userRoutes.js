const express = require("express");
const router = express.Router();

const {body} = require("express-validator");
const userController = require("../controllers/userController");


//validaciones
const validateCreateForm =[
    body("user_name").notEmpty().withMessage("Debes completar el campo Nombre"),
    body("user_surname").notEmpty().withMessage("Debes completar el campo Apellido"),
    body("user_email").notEmpty().withMessage("Debes completar el campo E-mail"),
];

router.post("/create", userController.guardarUsuario);
router.get("/perfil", userController.perfilUsuario);
router.get("/editarperfil", userController.editarperfil);
router.post("/editarperfil/:idUsuario", userController.editarperfil);

router.post("/login", userController.login);
router.get("/register", validateCreateForm, userController.register);


module.exports=(router);

