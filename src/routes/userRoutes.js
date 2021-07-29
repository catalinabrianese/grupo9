const express = require("express");
const router = express.Router();

const {body} = require("express-validator");
const userController = require("../controllers/userController");
const logDBMiddleware = require("../middlewares/logDBMiddleware");
let guestMiddleware = require("../middlewares/guestMiddleware");


//validaciones
const validateCreateForm =[
    body("user_name").notEmpty().withMessage("Debes completar el campo Nombre"),
    body("user_surname").notEmpty().withMessage("Debes completar el campo Apellido"),
    body("user_email").isEmail().withMessage("Debes completar el campo E-mail"),
    body("pass").notEmpty().withMessage("Debes completar el campo password"),
    body("pass").custom((value, {req}) => {
      if (value !== req.body["pass_confirmation"]) {
          throw new Error("no coinciden las claves")
      }
      return true
    }),
];


router.get("/perfil", userController.perfilUsuario);

router.get("/editarperfil", userController.editarperfil);
router.post("/editarperfil/:idUsuario", userController.editarperfil);

router.get("/login", guestMiddleware, userController.login);
router.post("/login",[
  body("user_email").isEmail().withMessage("Email inválido"),
  body("pass").notEmpty().withMessage("Debe ingresar la contraseña")
], userController.processLogin);

router.get("/register", validateCreateForm, userController.register);
router.post("/register", logDBMiddleware, validateCreateForm, userController.guardarUsuario);


module.exports=(router);

