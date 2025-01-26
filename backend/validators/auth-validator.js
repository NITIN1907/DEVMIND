const {z} = require('zod')


const loginSchema = z.object({
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .min(3,{message:"Email must be at least 3 characters"})
    .max(255,{message:"Email must be more than 255 characters"}),
    password:z
    .string({required_error:"Password is required"})
    .min(3,{message:"Password must be at least 7 characters"})
    .max(1024,{message:"Password must be at least 1024 characters"})

})
const signupSchema = loginSchema.extend({
    username: z.string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least 3 characters"})
    .max(255,{message:"Name must be more than 255 characters"}),

  
    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone must 10 characters"})
    .max(10,{message:"Phone must 10 characters"}),

   
})

module.exports = signupSchema;
module.exports = loginSchema;