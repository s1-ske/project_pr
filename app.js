const express = require("express");
const Productrouter= require("./src/routes/product_route");
const app=express();
require("dotenv").config();

app.use(express.json());
app.use("/api/v1",Productrouter);



module.exports=app;