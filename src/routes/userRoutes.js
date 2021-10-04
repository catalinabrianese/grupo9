const express = require("express");
const router = express.Router();

const {body} = require("express-validator");
const userController = require("../controllers/userController");
const logDBMiddleware = require("../middlewares/logDBMiddleware");
let guestMiddleware = require("../middlewares/guestMiddleware");
const multer = require("multer");
const db = require('../database/models');

const multerDS = multer.diskStorage({ 
  destination: function (req, file, cb) { 
     cb(null, path.join(__dirname, '../../public/imgProf')); 
  }, 
  filename: function (req, file, cb) { 
      let newImage=/*Date.now() + path.extname(*/file.originalname/*)*/;
     cb(null,newImage);
  }
  });
const uploadFile = multer({ storage: multerDS });


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

router.get("/login", userController.login);
router.post("/login",[
  body("user_email").isEmail().withMessage("Email inválido"),
  body("pass").notEmpty().withMessage("Debe ingresar la contraseña")
], userController.processLogin);

router.get("/logout", userController.logout);

router.post("/imagenPerfil", uploadFile.single('imagen'), userController.guardarFotoPerfil);

router.get("/register", validateCreateForm, userController.register);
router.post("/register", logDBMiddleware, validateCreateForm, userController.guardarUsuario);


module.exports=(router);

