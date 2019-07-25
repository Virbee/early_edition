require("dotenv").config();
require("./config/db-connection");
require("./config/passport");
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const cors = require("cors");
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    allowedHeaders: ["content-type", "set-cookie"]
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 3600 * 60 * 1000,
      path: "/",
      domain: "http://localhost:3000"
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60
    }),
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));

//authenticating route
const authRoute = require("./auth/auth");
app.use("/auth", authRoute);

//api routes
const userAPI = require("./api/user");
const articleAPI = require("./api/article");
app.use("/api/users", userAPI);
app.use("/api/articles", articleAPI);

app.listen(process.env.PORT, () => {
  console.log("App hosted on: https://localhost:", process.env.PORT);
});
