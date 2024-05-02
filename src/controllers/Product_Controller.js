const CatchAsyncError = require("../middleware/CatchAsyncError");
const {respo}=require("../utils/util");
const {ValidataeToCreate, Create,getAll,ValidateId,getProduct,Delete,Update}=require("../services/Product_Services")


exports.createProduct=CatchAsyncError(async(req,res)=>{
    const data=await ValidataeToCreate(req,res);
    await Create(data,res);
})

exports.getAllProduct=CatchAsyncError(async(req,res)=>{
    await getAll(req,res);
})

exports.getSingleProduct = CatchAsyncError(async(req,res)=>{
    const data=await ValidateId(req,res);
    await getProduct(data,res)
})

exports.deleteProduct = CatchAsyncError(async(req,res)=>{
    const data = await ValidateId(req,res);
    await Delete(data,res)
})

exports.updateProduct = CatchAsyncError(async(req,res)=>{
    const data = await ValidateId(req,res);
    await Update(data,res,req)
})