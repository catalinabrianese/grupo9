const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/create", userController.guardarUsuario);
router.get("/perfil", userController.perfilUsuario);
router.post("/login", userController.login);


module.exports=(router);

