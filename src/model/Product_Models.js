const {Schema,model}=require("mongoose");

const ProductSchema=new Schema({
    name:{
        type:String,
        require:[true,"please Enter product name"],
    },
    price:{
        type:String,
        require:[true,"please Enter product price"],
    },
    description:{
        type:String,
        require:[true,"please enter your description"]
    }
})

module.exports=new model("product",ProductSchema);