const express= require("express");
const app = express();
const path = require("path");
const mainRouter = require("./src/routes/mainRoutes");
const userRouter = require("./src/routes/userRoutes");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/", mainRouter);
app.use("/user", userRouter);
app.set("view engine", "ejs");

app.use((req,res,next)=>{
    res.status(404).render("not-found");
});

app.listen(3000, () => {
    console.log("server corriendo");
});



