const express = require("express");
const router = express.Router();
const multer = require("multer");
const {body} = require("express-validator");
const userController = require("../controllers/userController");
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, '../../public/img'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, "${Date.now()}_img_${path.extname(file.originalname)}");  } 
    });
const uploadFile = multer({ storage });

//validaciones
const validateCreateForm =[
    body("user_name").notEmpty().withMessage("Debes completar el campo Nombre"),
    body("user_surname").notEmpty().withMessage("Debes completar el campo Apellido"),
    body("user_email").notEmpty().withMessage("Debes completar el campo E-mail"),
];

router.post("/create", uploadFile.single('img'), userController.guardarUsuario);
router.get("/perfil", userController.perfilUsuario);
router.post("/login", userController.login);
router.get("/register", validateCreateForm, userController.register);


module.exports=(router);

