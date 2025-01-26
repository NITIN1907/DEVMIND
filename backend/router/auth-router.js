const express = require("express")
const router = express.Router();
const authControl = require("../controllers/auth-controller");
const signupSchema  = require("../validators/auth-validator")
const validate = require("../middlewares/validate-middleware")
const authMiddleware = require("../middlewares/auth-middleware");
const loginSchema = require("../validators/auth-validator");
router.get("/",authControl.home)

router.post("/register",validate(signupSchema),authControl.register)

router.post("/login",validate(loginSchema), authControl.login)

router.get("/user",authMiddleware,authControl.users)
module.exports=router;