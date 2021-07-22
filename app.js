const express= require("express");
const app = express();
const path = require("path");
const mainRouter = require("./src/routes/mainRoutes");
const userRouter = require("./src/routes/userRoutes");
const methodOverride = require("method-override");
const logMiddleware = require("./src/middlewares/logMiddleware");

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(logMiddleware);
app.use("/", mainRouter);
app.use("/user", userRouter);
app.set("view engine", "ejs");

app.use((req,res,next)=>{
    res.status(404).render("not-found");
});

app.listen(process.env.PORT || 3001, () => {
    console.log("Servidor corriendo en el puerto 3001")
});



