

const { default: mongoose}=require("mongoose");

exports.connectDB=()=>{
    mongoose.connect(process.env.MONGO_DB)
    .then((res)=>{
        console.log(`Db is Connected ${res.connection.host}`)
    })
    .catch((error)=>{
        console.log(`Error while connecting to mongo ${error?.message}`)
    })
}
