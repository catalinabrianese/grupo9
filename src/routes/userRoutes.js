const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/create", userController.guardarUsuario);
router.get("/perfil", userController.perfilUsuario);
module.exports=(router);

