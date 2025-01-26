//? In an Express.js application, a "controller" refer to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organise your application by separating concerns and following the MVC (model-view-Controller) design pattern.


const User = require("../models/user-model");
const home = async (req,res)=>{
    try{
        res.send("welcome to world best series by thapa technical using router");
    }catch(error)
    {
        console.log(error);
    }
}

const register = async (req,res)=>{  
    try{

       const {username,email,phone,password} = req.body;

       const userExist = await User.findOne({email});

       if(userExist)
       {
        return res.status(400).json({message:"email already exist"});
       }
       //hash the password

    //    const salt =10;
    //    const hash_pass=await bcrypt.hash(password,salt);

       const userCreated =await User.create({
        username,
        email,
        phone,
        password,
    })
        res.status(200).json({message:"registration successfull",token:await userCreated.generateToken(),userId : userCreated._id.toString() ,
      })
    }catch(e){
        res.json("server problem")
    }
}
const login=async (req, res) => {
    try{
        const {email,password} = req.body;
        const userExist = await User.findOne({email});
        if(!userExist)
        {
            return res.status(400).json({message: "invalid Credentials"});
        }

        // const isPasswordValid= await bcrypt.compare(password, userExist.password);
        const isPasswordValid=await userExist.comparePassword(password);
        if(isPasswordValid)
        {
            res.status(200).json({
                message:"login successfull",
                token:await userExist.generateToken(),
                userId : userExist._id.toString()
                 ,})
        }else{
            res.status(401).json({message:"Invalid credentials"});
        }
    
    }catch(err){
        // res.status(500).json("internal server error");
        next(err);
    }
}

//to send user data
const users = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData)
        return res.status(200).json({userData})
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = {home,register,login,users};