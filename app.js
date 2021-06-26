const express= require("express");
const app = express();
const path = require("path");
const mainRoutes = require("./src/routes/mainRoutes");

app.use(express.static(path.join(__dirname, "./public")));

app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("server corriendo")
});

app.get("/", function(req, res){
    res.sendFile((__dirname, "./views/index.ejs"));
});

