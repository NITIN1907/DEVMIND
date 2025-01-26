const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    username:{
        type: 'string',
        required: true,
    },
    email:{
        type: 'string',
        required:true,
    },
    phone:{
        type: 'string',
        required:true,
    },
    password:{
        type: 'string',
        required:true,
    },
    admin:{
        type: 'boolean',
       default: false,
    } 
})

//compare the password
userSchema.methods.comparePassword = async function (password){
    return bcrypt.compare(password, this.password)
}

//? pre storing before storing in the database
userSchema.pre("save",async function(next){
    console.log("pre method",this)
    const user = this;//?whole database 
    if(!user.isModified("password")){
        next();
    }
    try{
        const salt = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(this.password,salt);
        user.password = hash_password;
    }catch(e){
        next(e);
    }
})

//?json web token it is not stored in database and it is stored in cookie or local storage

userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
            userId: this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
    process.env.JWT_SECRET_KEY,
    {
    expiresIn:"30d" ,
    })
    }catch(e){
        console.error(e);
    }
}

const User = new mongoose.model("User",userSchema)

module.exports = User;