const express= require("express");
const app = express();
const path = require("path");
const mainRouter = require("./src/routes/mainRoutes");

app.use(express.static(path.join(__dirname, "./public")));
app.use("/", mainRouter);
app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("server corriendo")
});



