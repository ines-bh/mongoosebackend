//1 express require
const express = require("express");

//2 app
const app = express();

//5 require dotenv
require("dotenv").config();

//6connect db
const connectDB = require("./config/connectDB");
connectDB();

//8 bodyparser middelware
app.use(express.json());

//7 require route
const router = require("./route/contact");
app.use("/api/contacts", router);

//3 port
const port = process.env.port;

// server
app.listen(port, (error) =>
  error
    ? console.log("server can not run server!!!")
    : console.log(`server is runing on port ${port}`)
);
