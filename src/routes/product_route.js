const express = require("express");
const {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/Product_Controller");
const Productrouter = express.Router();

Productrouter.post("/create", createProduct);
Productrouter.get("/allproduct", getAllProduct);
Productrouter.get("/singleproduct/:id", getSingleProduct);
Productrouter.delete("/deleteproduct/:id", deleteProduct);
Productrouter.put("/updateproduct/:id", updateProduct);

module.exports = Productrouter;
