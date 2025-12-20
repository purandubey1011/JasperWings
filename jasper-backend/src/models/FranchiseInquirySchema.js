const mongoose = require("mongoose");

const franchiseInquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },

    countryCode: {
      type: String,
      default: "+1",
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },

    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },

    investmentBudget: {
      type: String,
      enum: ["less-than-400k", "more-than-400k"],
      required: [true, "Investment budget is required"],
    },

    message: {
      type: String,
      trim: true,
    },

    consent: {
      type: Boolean,
      required: [true, "Consent is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FranchiseInquiry", franchiseInquirySchema);
