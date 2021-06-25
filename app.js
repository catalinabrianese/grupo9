const express= require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));


app.listen(3000, () => {
    console.log("server corriendo")
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/productos/:id", function(req,res){
    let idProducto=req.params.id;
})