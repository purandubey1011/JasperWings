const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
const FranchiseInquiry = require("../models/FranchiseInquirySchema");

// Home / test
exports.homepage = catchAsyncErrors(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Jasper Wings API",
  });
});

// ➡️ Create Franchise Inquiry
exports.createFranchiseInquiry = catchAsyncErrors(async (req, res) => {
  const {
    fullName,
    email,
    countryCode,
    phone,
    location,
    investmentBudget,
    message,
    consent,
  } = req.body;

  if (!consent) {
    return res.status(400).json({
      success: false,
      message: "Consent is required",
    });
  }

  const inquiry = await FranchiseInquiry.create({
    fullName,
    email,
    countryCode,
    phone,
    location,
    investmentBudget,
    message,
    consent,
  });

  res.status(201).json({
    success: true,
    message: "Franchise inquiry submitted successfully",
    inquiry,
  });
});

// ➡️ Get All Franchise Inquiries (Admin)
exports.getAllFranchiseInquiries = catchAsyncErrors(async (req, res) => {
  const inquiries = await FranchiseInquiry.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: inquiries.length,
    inquiries,
  });
});
