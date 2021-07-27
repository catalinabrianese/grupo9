const express = require("express");
const router = express.Router();

const {body} = require("express-validator");
const userController = require("../controllers/userController");
const logDBMiddleware = require("../middlewares/logDBMiddleware");


//validaciones
const validateCreateForm =[
    body("user_name").notEmpty().withMessage("Debes completar el campo Nombre"),
    body("user_surname").notEmpty().withMessage("Debes completar el campo Apellido"),
    body("user_email").isEmail().withMessage("Debes completar el campo E-mail"),
    body("pass").notEmpty().withMessage("Debes completar el campo password"),
    body("pass").custom((value, {req}) => {
      if (value !== req.body["pass-confirmation"]) {
          throw new Error("no coinciden las claves")
      }
      return true
    }),
];

router.post("/create", logDBMiddleware, validateCreateForm, userController.guardarUsuario);
router.get("/perfil", userController.perfilUsuario);
router.get("/editarperfil", userController.editarperfil);
router.post("/editarperfil/:idUsuario", userController.editarperfil);

router.post("/login", userController.login);
router.get("/register", validateCreateForm, userController.register);


module.exports=(router);

