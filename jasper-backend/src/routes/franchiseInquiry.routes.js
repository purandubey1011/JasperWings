let express = require("express");
let router = express.Router();

const {
  homepage,
  createFranchiseInquiry,
  getAllFranchiseInquiries,
} = require("../controllers/franchiseInquiry.controller.js");

// home route
router.route("/").get(homepage);

// franchise inquiry form (frontend submit)
router.route("/franchise-inquiry").post(createFranchiseInquiry);

// get all franchise inquiries (admin)
router.route("/franchise-inquiry").get(getAllFranchiseInquiries);

module.exports = router;
