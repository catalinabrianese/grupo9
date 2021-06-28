const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/user/create", userController.guardarUsuario);
router.get("/user/perfil", userController.perfilUsuario);
module.exports=(router);
