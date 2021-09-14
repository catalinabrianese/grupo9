const express= require("express");
const app = express();
const path = require("path");
const mainRouter = require("./src/routes/mainRoutes");
const userRouter = require("./src/routes/userRoutes");
const methodOverride = require("method-override");
const logMiddleware = require("./src/middlewares/logMiddleware");
const session= require("express-session");
const cookieParser = require("cookie-parser");
/*const db = require("./src/database/models");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(db,)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
*/
app.use(methodOverride("_method"));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(session({secret: "esto es secreto!", resave: false, saveUninitialized: true} ));
app.use(logMiddleware);
app.use("/", mainRouter);
app.use("/user", userRouter);
app.set("view engine", "ejs");

app.use((req,res,next)=>{
    res.status(404).render("not-found");
});

app.listen(process.env.PORT || 3001, () => {
    console.log("Servidor corriendo en el puerto 3001");
    
});




