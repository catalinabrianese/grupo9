const express= require("express");
const app = express();
const path = require("path");
const mainRouter = require("./src/routes/mainRoutes");
const userRouter = require("./src/routes/userRoutes");
//const productRouter=require("./src/routes/productRoutes");
const methodOverride = require("method-override");
const logMiddleware = require("./src/middlewares/logMiddleware");
let session= require("express-session");
const cookieParser = require("cookie-parser");

app.use(methodOverride("_method"));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(session({secret: "esto es secreto!" , resave: false, saveUninitialized: false}));
app.use(logMiddleware);
app.use("/", mainRouter);
app.use("/user", userRouter);
//app.use("/product", productRouter);
app.set("view engine", "ejs");

app.use((req,res,next)=>{
    res.status(404).render("not-found",  {usuarioLogueado: req.session.usuarioLogueado, usuarioAdmin:req.session.usuarioAdmin});
});

app.listen(process.env.PORT || 3001, () => {
    console.log("Servidor corriendo en el puerto 3001");
    
});




