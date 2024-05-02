const respo=(res,statuscode,message,data)=>{
    res.status(statuscode).json({
        message,
        data
    })
}

module.exports={respo};