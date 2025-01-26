const express = require('express')
const router = express.Router()
const contactController = require("../controllers/contact-controller")
router.post("/contact",contactController.contactForm)

module.exports = router;