const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const mainController = require("../controllers/mainController");
const multerDS = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, path.join(__dirname, '../../public/img')); 
    }, 
    filename: function (req, file, cb) { 
        let newImage=Date.now() + path.extname(file.originalname);
       cb(null,newImage);
    }
    });
const uploadFile = multer({ storage: multerDS });

router.get("/", mainController.index);

router.get("/productos", mainController.products);
router.get("/detalledeproducto/:id", mainController.detailproducts);
router.get("/login", mainController.login);
router.get("/carrito", mainController.carrito);

router.get("/crear", mainController.crear);
router.post("/crear",uploadFile.single('imagen'), mainController.guardar);
router.get("/editar/:id", mainController.editar);
router.put("/editar/:id", mainController.actualizar);

router.delete("/eliminar/:id", mainController.eliminar);

module.exports=(router);