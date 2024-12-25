const mongoose = require("mongoose")

const connectToDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://nlokantha:nlokantha@cluster0.cmqkd.mongodb.net/")
        console.log("MongoDB Connected Successfully")

    }catch(error){
        console.log("Failed To connect mongodb");
        process.exit(1)
    }
}

module.exports = connectToDB

