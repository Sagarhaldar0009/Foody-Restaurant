const express = require("express")
const router = express.Router()

const {sendBookingController} = require("../controllers/booking")

router.post("/send",sendBookingController)

module.exports = router