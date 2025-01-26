const Service = require("../models/service-model");

const services=async (req,res)=>{
    try {
        const response = await Service.find();
        if(!response)
        {
            res.status(404).json({message:"No file found..."})
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.error(error);
    }
}

module.exports = services;