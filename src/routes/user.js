const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/user/create", userController.guardarUsuario);

module.exports=(router);

