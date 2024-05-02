const Product = require("../model/Product_Models");
const { respo } = require("../utils/util");
exports.ValidataeToCreate = async (data, res) => {
  const { name, price, description } = data.body;
  if (!name || !price || !description) {
    throw new Error("please fill the details");
  }
  return { name, price, description };
};

exports.Create = async (data, res) => {
  if (!data) {
    throw new Error("Data not found");
  }
  console.log(data);
  const product = await Product.create(data);
  respo(res, 200, "product created sucessfully", product);
};

exports.getAll = async (data, res) => {
  const product = await Product.find();
  if (!product) {
    throw new Error("product not found");
  }
  respo(res, 200, "all products", product);
};

exports.ValidateId = async (data, res) => {
  const { id } = data.params;
  if (!id) {
    throw new Error("Id was not found Fill the details");
  }
  return id;
};

exports.getProduct = async (data, res) => {
  const product = await Product.findById(data);
  if (!product) {
    throw new Error("product was not found");
  }
  respo(res, 200, "get Product sucessfully", product);
};

exports.Delete = async (data, res) => {
  if (!data) {
    throw new Error("Id was not given fill the details");
  }
  const product = await Product.findById(data);
  if (!product) {
    throw new Error("product not found");
  }
  await Product.findByIdAndDelete(data);
  respo(res, 200, "deleteted sucessfully", {});
};

exports.Update = async (id, res, req) => {
  if (!id) {
    throw new Error("ID was not found");
  }
  if (!req.body.description) {
    throw new Error("Please add description");
  }
  const data = await Product.findById(id);
  if (!data) {
    throw new Error("Product not found");
  }
  await Product.findByIdAndUpdate(
    id,
    {
      description: req.body.description,
    },
    { new: true }
  ).then((product) => {
    respo(res, 200, "product updated Sucessfully", product);
  });
};
