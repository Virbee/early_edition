require("dotenv").config();
require("./config/db-connection");
// require("./config/passport");
const express = require("express");
const cookieParser = require("cookie-parser");
// const session = require("express-session");
// const passport = require("passport");
const cors = require("cors");
const app = express();
// const data = require("./bin/datasets");
// const Article = require("./models/Article");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3001"]
  })
);

//authenticating route
// const authRoute = require("./auth/auth");
// app.use("/api/auth", authRoute);

//api routes
// const userAPI = require("./api/user");
const articleAPI = require("./api/article");
// app.use("/api/users", userAPI);
app.use("/api/articles", articleAPI);

app.listen(process.env.PORT, () => {
  console.log("App hosted on: ", process.env.SERVER_URL);
});
