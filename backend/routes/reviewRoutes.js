const express = require("express");
const {addReviewController,getAllreviewController } = require("../controller/reviewController")

const router = express.Router()

router.post("/review",addReviewController)
router.get("/review",getAllreviewController )

module.exports =router