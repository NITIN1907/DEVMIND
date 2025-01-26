const mongoose = require("mongoose");




const URI=process.env.MONGO_URI
const connectDb = async ()=>{
    try {
       await mongoose.connect(URI);
       console.log("database connection sucessful....")
    } catch (error) {
      console.error("database connction failed...")
      process.exit(0);  
    } 
}

module.exports = connectDb;