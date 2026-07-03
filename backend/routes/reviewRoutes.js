const express = require("express");
const {
  addReviewController,
  getAllreviewController,
  getDataByCompanyName,
} = require("../controller/reviewController");

const router = express.Router();

router.post("/review", addReviewController);
router.get("/review", getAllreviewController);
router.get("/review/:company", getDataByCompanyName);

module.exports = router;
